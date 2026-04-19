import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Play, Users, BookOpen, ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Home, Settings } from 'lucide-react';
import { generateGameData, Category, Question, Difficulty, QuestionType, gameBoard as initialGameBoard, gameCategories as initialCategories, BoardCell } from './data/questions';
import TeacherMode from './components/TeacherMode';
import TeacherLogin from './components/TeacherLogin';
import { playCorrect, playWrong, playTick, playTimeUp, playOpen, playVictory } from './lib/soundUtils';

type GameState = 'START' | 'RULES' | 'TEAM_SETUP' | 'BOARD' | 'QUESTION' | 'FEEDBACK' | 'GAME_OVER';
type GameMode = 'SINGLE' | 'TEAM';
type TeamTurn = 'A' | 'B';

const getDifficultyLabel = (diff: Difficulty) => {
  switch(diff) {
    case 'easy': return 'Könnyű';
    case 'medium': return 'Közepes';
    case 'hard': return 'Nehéz';
    case 'expert': return 'Szakértő';
    default: return diff;
  }
};

const DEFAULT_TIMER = 25;
const EXPERT_TIMER = 30;

const getTimerDuration = (points: number): number => 
  points === 500 ? EXPERT_TIMER : DEFAULT_TIMER;

const getTypeLabel = (type: QuestionType) => {
  switch(type) {
    case 'multiple_choice': return 'Feleletválasztás';
    case 'true_false': return 'Igaz-Hamis';
    case 'faulty_statement': return 'Hibás állítás';
    case 'timeline': return 'Időrend';
    case 'matching': return 'Párosítás';
    case 'cause_effect': return 'Ok-okozat';
    case 'comparison': return 'Összehasonlítás';
    case 'concept_application': return 'Fogalomalkalmazás';
    case 'historical_significance': return 'Történelmi jelentőség';
    case 'sequence_logic': return 'Időrendi logika';
    case 'source_based': return 'Forrásalapú kérdés';
    case 'viewpoint_goal': return 'Nézőpont / cél';
    case 'relationship_match': return 'Párosítási logika';
    default: return type;
  }
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState(() => {
    return sessionStorage.getItem('teacher_auth') === 'true';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleTeacherLogin = () => {
    sessionStorage.setItem('teacher_auth', 'true');
    setIsTeacherAuthenticated(true);
  };

  const handleTeacherLogout = () => {
    sessionStorage.removeItem('teacher_auth');
    setIsTeacherAuthenticated(false);
  };

  const [fullBoard, setFullBoard] = useState<BoardCell[]>(initialGameBoard);
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  useEffect(() => {
    const savedBoard = localStorage.getItem('tori_mester_board');
    if (savedBoard) {
      try {
        setFullBoard(JSON.parse(savedBoard));
      } catch (e) {
        console.error("Failed to parse saved board", e);
      }
    }
  }, []);

  const handleSaveBoard = (newBoard: BoardCell[]) => {
    setFullBoard(newBoard);
    localStorage.setItem('tori_mester_board', JSON.stringify(newBoard));
  };

  const [gameState, setGameState] = useState<GameState>('START');
  const [gameMode, setGameMode] = useState<GameMode>('SINGLE');
  
  const [singleScore, setSingleScore] = useState(0);
  const [teamScores, setTeamScores] = useState({ A: 0, B: 0 });
  const [teamNames, setTeamNames] = useState({ A: 'A csapat', B: 'B csapat' });
  const [currentTurn, setCurrentTurn] = useState<TeamTurn>('A');
  const [showTurnNotice, setShowTurnNotice] = useState(false);
  
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [shuffledCorrectIndex, setShuffledCorrectIndex] = useState<number | null>(null);
  
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const [gameCategories, setGameCategories] = useState<Category[]>([]);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);

  useEffect(() => {
    if (gameState === 'GAME_OVER') {
      playVictory();
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults, particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults, particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const startGame = (mode: GameMode) => {
    const { selectedCategories, selectedQuestions } = generateGameData(fullBoard, categories);
    setGameCategories(selectedCategories);
    setGameQuestions(selectedQuestions);
    setGameMode(mode);
    setSingleScore(0);
    setTeamScores({ A: 0, B: 0 });
    setCurrentTurn('A');
    setAnsweredQuestions(new Set());
    setStats({ correct: 0, incorrect: 0 });
    
    if (mode === 'TEAM') {
      setGameState('TEAM_SETUP');
    } else {
      setGameState('BOARD');
    }
  };

  const confirmTeamSetup = () => {
    setGameState('BOARD');
  };

  const handleQuestionClick = (q: Question) => {
    if (answeredQuestions.has(q.id)) return;
    
    playOpen();

    // Shuffling logic for multiple choice and faulty statement questions
    if (q.questionType === 'multiple_choice' || q.questionType === 'faulty_statement') {
      const optionsWithMeta = q.options.map((option, index) => ({
        option,
        isCorrect: q.correctAnswer 
          ? option === q.correctAnswer 
          : index === q.correctAnswerIndex
      }));
      
      // Fisher-Yates Shuffle
      const shuffled = [...optionsWithMeta];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      setShuffledOptions(shuffled.map(item => item.option));
      setShuffledCorrectIndex(shuffled.findIndex(item => item.isCorrect));
    } else {
      setShuffledOptions(q.options);
      setShuffledCorrectIndex(q.correctAnswerIndex ?? null);
    }

    setCurrentQuestion(q);
    setSelectedAnswer(null);
    setIsTimeUp(false);
    setTimeLeft(getTimerDuration(q.points));
    setGameState('QUESTION');
  };

  useEffect(() => {
    if (gameState === 'QUESTION' && timeLeft !== null && timeLeft > 0 && selectedAnswer === null && !isTimeUp) {
      const timerId = setTimeout(() => {
        const nextTime = timeLeft - 1;
        setTimeLeft(nextTime);
        if (nextTime <= 5) {
          playTick();
        }
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (gameState === 'QUESTION' && timeLeft === 0 && selectedAnswer === null && !isTimeUp) {
      handleTimeUp();
    }
  }, [gameState, timeLeft, selectedAnswer, isTimeUp]);

  const handleTimeUp = () => {
    playTimeUp();
    setIsTimeUp(true);
    setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    if (currentQuestion) {
      setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id));
    }
    setGameState('FEEDBACK');
  };

  const handleAnswer = (index: number) => {
    if (!currentQuestion || selectedAnswer !== null || isTimeUp) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === shuffledCorrectIndex;
    
    if (isCorrect) {
      playCorrect();
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
      if (gameMode === 'SINGLE') {
        setSingleScore(prev => prev + currentQuestion.points);
      } else {
        setTeamScores(prev => ({
          ...prev,
          [currentTurn]: prev[currentTurn] + currentQuestion.points
        }));
      }
    } else {
      playWrong();
      setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id));
    
    setTimeout(() => {
      setGameState('FEEDBACK');
    }, 1000);
  };

  const closeFeedback = () => {
    let nextTurn = currentTurn;
    if (gameMode === 'TEAM') {
      nextTurn = currentTurn === 'A' ? 'B' : 'A';
      setCurrentTurn(nextTurn);
      setShowTurnNotice(true);
      setTimeout(() => setShowTurnNotice(false), 2000);
    }
    
    if (answeredQuestions.size === gameQuestions.length) {
      setGameState('GAME_OVER');
    } else {
      setGameState('BOARD');
    }
    setCurrentQuestion(null);
  };

  const getRank = (score: number) => {
    const maxScore = gameQuestions.reduce((sum, q) => sum + q.points, 0);
    const percentage = score / maxScore;
    if (percentage >= 0.8) return 'Töri Mester';
    if (percentage >= 0.6) return 'Profi';
    if (percentage >= 0.4) return 'Haladó';
    return 'Kezdő';
  };

  if (currentPath === '/teacher') {
    if (!isTeacherAuthenticated) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 flex flex-col">
          <TeacherLogin 
            onLoginSuccess={handleTeacherLogin} 
            onBack={() => navigateTo('/')} 
          />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 flex flex-col">
        <TeacherMode 
          board={fullBoard} 
          categories={categories} 
          onSaveBoard={handleSaveBoard} 
          onExit={() => navigateTo('/')} 
          onLogout={handleTeacherLogout}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {gameState === 'START' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-6 relative"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-slate-950 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" 
            />

            {/* Teacher Mode Button Tracker */}
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={() => navigateTo('/teacher')}
                className="group flex items-center gap-2 bg-slate-900/60 backdrop-blur-md hover:bg-slate-800 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl transition-all border border-slate-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
              >
                <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-sm font-semibold tracking-wide uppercase">Tanári mód</span>
              </button>
            </div>

            {/* Center Content */}
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-7xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-100 via-blue-400 to-purple-500 mb-6 tracking-tighter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] filter">
                  Töri Mester
                </h1>
                <p className="text-2xl md:text-3xl text-blue-200/80 font-medium tracking-wide uppercase font-display drop-shadow-sm">
                  Érettségi vetélkedő
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Thin top highlight for glass card */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                <button 
                  onClick={() => startGame('SINGLE')}
                  className="group relative w-full flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white p-5 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1 active:translate-y-0 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden border border-blue-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Play className="w-7 h-7 drop-shadow-md" />
                  <span>Egyéni játék</span>
                </button>
                
                <button 
                  onClick={() => startGame('TEAM')}
                  className="group relative w-full flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white p-5 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1 active:translate-y-0 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] overflow-hidden border border-purple-400/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Users className="w-7 h-7 drop-shadow-md" />
                  <span>Kétcsapatos játék</span>
                </button>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2" />

                <button 
                  onClick={() => setGameState('RULES')}
                  className="group w-full flex items-center justify-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white p-4 rounded-2xl font-bold text-lg transition-all border border-slate-700 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                  <span>Szabályok</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {gameState === 'RULES' && (
          <motion.div 
            key="rules"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-6 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-8 text-blue-400">Játékszabályok</h2>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 text-lg text-slate-300">
              <p>🎯 <strong>Cél:</strong> Válaszolj helyesen a történelem érettségi témakörökből összeállított kérdésekre, és gyűjts minél több pontot!</p>
              <p>🎲 <strong>A tábla:</strong> A játéktáblán 5 kategória található. Minden kategóriában 5 kérdés van, 100-tól 500 pontig nehezedő sorrendben.</p>
              <p>👤 <strong>Egyéni mód:</strong> Gyűjtsd a pontokat egyedül, és érd el a "Töri Mester" rangot!</p>
              <p>👥 <strong>Csapat mód:</strong> Két csapat verseng egymással. A csapatok felváltva választanak kérdést. Helyes válasz esetén a választó csapat kapja a pontot.</p>
            </div>
            <button 
              onClick={() => setGameState('START')}
              className="mt-12 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Vissza a főmenübe
            </button>
          </motion.div>
        )}

        {gameState === 'TEAM_SETUP' && (
          <motion.div 
            key="team_setup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-display font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Csapatok beállítása
              </h2>
              <div className="space-y-6 mb-10">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-400 uppercase tracking-widest px-1">A Csapat Neve</label>
                  <input 
                    type="text" 
                    maxLength={20}
                    value={teamNames.A}
                    onChange={(e) => setTeamNames(prev => ({ ...prev, A: e.target.value }))}
                    onBlur={() => {
                      if (!teamNames.A.trim()) setTeamNames(prev => ({ ...prev, A: 'A csapat' }));
                      else setTeamNames(prev => ({ ...prev, A: teamNames.A.trim() }));
                    }}
                    className="w-full bg-slate-800 border-2 border-slate-700 focus:border-blue-500 rounded-xl p-4 text-white text-lg font-bold transition-all outline-none"
                    placeholder="A csapat"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-purple-400 uppercase tracking-widest px-1">B Csapat Neve</label>
                  <input 
                    type="text" 
                    maxLength={20}
                    value={teamNames.B}
                    onChange={(e) => setTeamNames(prev => ({ ...prev, B: e.target.value }))}
                    onBlur={() => {
                      if (!teamNames.B.trim()) setTeamNames(prev => ({ ...prev, B: 'B csapat' }));
                      else setTeamNames(prev => ({ ...prev, B: teamNames.B.trim() }));
                    }}
                    className="w-full bg-slate-800 border-2 border-slate-700 focus:border-purple-500 rounded-xl p-4 text-white text-lg font-bold transition-all outline-none"
                    placeholder="B csapat"
                  />
                </div>
              </div>
              <button 
                onClick={confirmTeamSetup}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black py-5 rounded-2xl text-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                Játék indítása
              </button>
              <button 
                onClick={() => setGameState('START')}
                className="w-full mt-4 text-slate-500 hover:text-slate-300 transition-colors uppercase text-xs font-bold tracking-widest"
              >
                Mégse
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'BOARD' && (
          <motion.div 
            key="board"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full"
          >
            {/* Header / Scoreboard */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-slate-900/50 p-4 md:px-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setGameState('START')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Vissza a főmenübe"
                >
                  <Home className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setShowRestartConfirm(true)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Új játék indítása"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-display font-bold text-blue-400 hidden lg:block">Töri Mester</h2>
              </div>

              {gameMode === 'TEAM' && (
                <div className="flex items-center justify-center flex-1 order-first md:order-none w-full">
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`flex items-center gap-3 px-6 py-2.5 rounded-2xl border-2 shadow-lg transition-all ${
                      currentTurn === 'A' 
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-blue-500/20' 
                        : 'border-purple-500 bg-purple-500/10 text-purple-400 shadow-purple-500/20'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full animate-pulse ${currentTurn === 'A' ? 'bg-blue-400' : 'bg-purple-400'}`} />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">Soron következik:</span>
                    <span className="text-xl font-display font-black tracking-tight underline decoration-2 underline-offset-4">
                      {currentTurn === 'A' ? teamNames.A : teamNames.B}
                    </span>
                  </motion.div>
                </div>
              )}
              
              {gameMode === 'SINGLE' ? (
                <div className="text-3xl font-display font-bold text-yellow-400">
                  {singleScore} <span className="text-lg text-slate-500">pont</span>
                </div>
              ) : (
                <div className="flex items-center gap-4 md:gap-8">
                  <div className={`flex flex-col items-center px-4 md:px-6 py-2 rounded-xl border-2 transition-all ${currentTurn === 'A' ? 'border-blue-500 bg-blue-500/10 scale-105' : 'border-slate-800 opacity-40 shadow-none'}`}>
                    <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 line-clamp-1 max-w-[80px] md:max-w-[120px]">{teamNames.A}</span>
                    <span className="text-2xl md:text-3xl font-display font-bold text-white">{teamScores.A}</span>
                  </div>
                  <div className="w-px h-8 bg-slate-800" />
                  <div className={`flex flex-col items-center px-4 md:px-6 py-2 rounded-xl border-2 transition-all ${currentTurn === 'B' ? 'border-purple-500 bg-purple-500/10 scale-105' : 'border-slate-800 opacity-40 shadow-none'}`}>
                    <span className="text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-wider mb-1 line-clamp-1 max-w-[80px] md:max-w-[120px]">{teamNames.B}</span>
                    <span className="text-2xl md:text-3xl font-display font-bold text-white">{teamScores.B}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Game Board container with slight glow behind */}
            <div className="flex-1 relative w-full overflow-x-auto pb-4">
              {/* Board ambient glow */}
              <div className="absolute inset-0 bg-blue-500/5 blur-[120px] pointer-events-none min-w-[800px]" />
              
              <div 
                className="relative z-10 min-w-[800px] w-full h-full grid gap-3 md:gap-4"
                style={{ gridTemplateColumns: `repeat(${gameCategories.length}, minmax(0, 1fr))` }}
              >
                {gameCategories.map(cat => (
                  <div key={cat.id} className="flex flex-col gap-3 md:gap-4">
                    {/* Category Header */}
                    <div 
                      className="bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-2xl px-2 py-3 flex items-center justify-center text-center shadow-[0_0_15px_rgba(59,130,246,0.15)] relative overflow-hidden h-16 md:h-24 w-full"
                    >
                      {/* Top edge highlight */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-400 to-blue-600/0 opacity-50" />
                      <h3 className="font-display font-bold text-blue-100 text-[11px] md:text-sm leading-snug uppercase tracking-wider break-words drop-shadow-sm line-clamp-3">
                        {cat.name}
                      </h3>
                    </div>

                    {/* Question Cells in this category column */}
                    {[100, 200, 300, 400, 500].map(points => {
                      const q = gameQuestions.find(q => q.categoryId === cat.id && q.points === points);
                      const isHighValue = points === 500;
                      
                      // Render empty placeholder if question doesn't exist, preserving layout
                      if (!q) {
                        return <div key={`${cat.id}-${points}`} className="w-full aspect-[4/3] bg-slate-900/20 rounded-2xl border border-slate-800/40" />;
                      }
                      
                      const isAnswered = answeredQuestions.has(q.id);
                      
                      return (
                        <button
                          key={q.id}
                          onClick={() => handleQuestionClick(q)}
                          disabled={isAnswered}
                          className={`
                            relative w-full aspect-[4/3] rounded-2xl flex items-center justify-center text-2xl md:text-5xl font-display font-black transition-all duration-500 overflow-hidden group
                            ${isAnswered 
                              ? 'bg-slate-950/60 border border-slate-800/40 text-slate-800 cursor-not-allowed shadow-inner' 
                              : `cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:translate-y-0
                                ${isHighValue
                                  ? 'bg-gradient-to-b from-indigo-900/90 to-slate-900/90 border-2 border-indigo-500/40 hover:border-indigo-400 text-indigo-300 hover:text-white'
                                  : 'bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-blue-900/60 hover:border-blue-500 text-blue-400 hover:text-white'
                                }`
                            }
                          `}
                        >
                          {/* Inner card glow/lighting for unanswered */}
                          {!isAnswered && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none ${isHighValue ? 'from-indigo-300/[0.05]' : ''}`} />
                            </>
                          )}
                          
                          {/* Point value display */}
                          <span className={`
                            relative z-10 drop-shadow-md tracking-tighter
                            ${isAnswered ? '' : (isHighValue ? 'text-indigo-400 group-hover:text-indigo-100 group-hover:drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]' : 'text-blue-300 group-hover:text-amber-300 group-hover:drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]')}
                          `}>
                            {!isAnswered && points}
                          </span>
                          
                          {/* "Solved" checkmark for answered */}
                          {isAnswered && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                              <CheckCircle2 className="w-1/3 h-1/3 text-slate-500" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Turn Transition Notification */}
            <AnimatePresence>
              {showTurnNotice && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.2, y: -50 }}
                  className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                >
                  <div className={`px-12 py-8 rounded-3xl border-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
                    currentTurn === 'A' 
                      ? 'bg-blue-600/90 border-blue-400 text-white' 
                      : 'bg-purple-600/90 border-purple-400 text-white'
                  }`}>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-black uppercase tracking-[0.3em] mb-2 text-white/70 text-center"
                    >
                      Most következik:
                    </motion.p>
                    <motion.h2 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-6xl font-display font-black text-center"
                    >
                      {currentTurn === 'A' ? teamNames.A : teamNames.B}
                    </motion.h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === 'QUESTION' && currentQuestion && (
          <motion.div 
            key="question"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex-1 flex flex-col p-6 max-w-5xl mx-auto w-full justify-center relative"
          >
            {/* Timer */}
            {timeLeft !== null && (
              <div className="absolute top-0 right-0 md:right-6 flex items-center justify-center">
                <div className={`
                  flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-4 font-display font-bold text-2xl md:text-3xl transition-colors duration-300
                  ${timeLeft <= 5 && !selectedAnswer && !isTimeUp ? 'border-rose-500 text-rose-500 bg-rose-500/10' : 'border-blue-500 text-blue-400 bg-blue-500/10'}
                `}>
                  {timeLeft}
                </div>
              </div>
            )}

            <div className="text-center mb-12 mt-16 md:mt-0">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="px-4 py-1 rounded-full bg-blue-900/50 text-blue-300 font-bold text-sm tracking-wider uppercase border border-blue-800/50">
                  {gameCategories.find(c => c.id === currentQuestion.categoryId)?.name} • {currentQuestion.points} pont
                </span>
                <span className="px-4 py-1 rounded-full bg-purple-900/50 text-purple-300 font-bold text-sm tracking-wider uppercase border border-purple-800/50">
                  {getDifficultyLabel(currentQuestion.difficulty)}
                </span>
                <span className="px-4 py-1 rounded-full bg-emerald-900/50 text-emerald-300 font-bold text-sm tracking-wider uppercase border border-emerald-800/50">
                  {getTypeLabel(currentQuestion.questionType)}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white mb-6">
                {currentQuestion.question}
              </h2>
              
              {currentQuestion.questionType === 'source_based' && currentQuestion.sourceText && (
                <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 text-left max-w-4xl mx-auto mb-8 shadow-inner">
                  <p className="text-slate-300 font-serif text-lg leading-relaxed italic border-l-4 border-blue-500 pl-4">
                    {currentQuestion.sourceText}
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shuffledOptions.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === shuffledCorrectIndex;
                const showResult = selectedAnswer !== null;
                
                let btnClass = "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200";
                
                if (showResult) {
                  if (isCorrect) {
                    btnClass = "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_30px_-5px_rgba(5,150,105,0.5)]";
                  } else if (isSelected) {
                    btnClass = "bg-rose-600 border-rose-500 text-white";
                  } else {
                    btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={showResult}
                    className={`
                      p-6 rounded-2xl border-2 text-left text-xl font-medium transition-all duration-300
                      ${btnClass}
                      ${!showResult && 'hover:border-blue-500 hover:-translate-y-1'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 font-bold text-lg shrink-0">
                        {['A', 'B', 'C', 'D'][idx]}
                      </span>
                      {opt}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {gameState === 'FEEDBACK' && currentQuestion && (
          <motion.div 
            key="feedback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl max-w-2xl w-full text-center shadow-2xl"
            >
              {isTimeUp ? (
                <div className="flex flex-col items-center text-rose-400 mb-6">
                  <XCircle className="w-20 h-20 mb-4" />
                  <h2 className="text-4xl font-display font-bold">Lejárt az idő!</h2>
                  <p className="text-slate-400 mt-2">Sajnos nem érkezett válasz időben.</p>
                </div>
              ) : (selectedAnswer === shuffledCorrectIndex) ? (
                <div className="flex flex-col items-center text-emerald-400 mb-6">
                  <CheckCircle2 className="w-20 h-20 mb-4" />
                  <h2 className="text-4xl font-display font-bold">Helyes válasz!</h2>
                  <p className="text-emerald-400/80 font-medium mt-2">+{currentQuestion.points} pont</p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-rose-400 mb-6">
                  <XCircle className="w-20 h-20 mb-4" />
                  <h2 className="text-4xl font-display font-bold">Helytelen válasz</h2>
                  <p className="text-slate-400 mt-2">A helyes megoldás: <strong className="text-white">{currentQuestion.correctAnswer || currentQuestion.options[currentQuestion.correctAnswerIndex!]}</strong></p>
                </div>
              )}

              {!isTimeUp && (
                <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 text-left border border-slate-700/50">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              <button 
                onClick={closeFeedback}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
              >
                Tovább a táblához
              </button>
            </motion.div>
          </motion.div>
        )}

        {gameState === 'GAME_OVER' && (
          <motion.div 
            key="gameover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <Trophy className="w-32 h-32 text-yellow-400 mb-6 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-2"
            >
              Játék vége!
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 25 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 mt-8 w-full max-w-md text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.25)]"
            >
              {gameMode === 'SINGLE' ? (
                <>
                  <p className="text-slate-400 text-lg mb-2">Végső pontszám</p>
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                    className="text-7xl font-display font-bold text-yellow-400 mb-6"
                  >
                    {singleScore}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="inline-block px-6 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 font-bold text-xl mb-8"
                  >
                    Minősítés: {getRank(singleScore)}
                  </motion.div>
                </>
              ) : (
                <div className="space-y-6 mb-8">
                  <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0, type: "spring" }}
                    className={`p-6 rounded-2xl border-2 ${teamScores.A > teamScores.B ? 'border-yellow-500 bg-yellow-500/10 shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]' : 'border-slate-800 bg-slate-800/50'}`}
                  >
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-2">{teamNames.A}</p>
                    <p className="text-6xl font-display font-bold text-white">{teamScores.A}</p>
                  </motion.div>
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                    className={`p-6 rounded-2xl border-2 ${teamScores.B > teamScores.A ? 'border-yellow-500 bg-yellow-500/10 shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]' : 'border-slate-800 bg-slate-800/50'}`}
                  >
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-2">{teamNames.B}</p>
                    <p className="text-6xl font-display font-bold text-white">{teamScores.B}</p>
                  </motion.div>
                  {teamScores.A === teamScores.B && (
                    <motion.p 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6, type: "spring" }}
                      className="text-2xl font-bold text-slate-300"
                    >
                      Döntetlen!
                    </motion.p>
                  )}
                </div>
              )}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex justify-center gap-8 text-slate-400 mb-8"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{stats.correct}</p>
                  <p className="text-sm uppercase tracking-wider mt-1">Helyes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-400">{stats.incorrect}</p>
                  <p className="text-sm uppercase tracking-wider mt-1">Hibás</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
                className="flex flex-col gap-4"
              >
                <button 
                  onClick={() => startGame(gameMode)}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  <RotateCcw className="w-5 h-5" />
                  Új játék
                </button>
                <button 
                  onClick={() => setGameState('START')}
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 p-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Home className="w-5 h-5" />
                  Főmenü
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Restart Confirmation Modal */}
        {showRestartConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl max-w-md w-full shadow-2xl"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">Új játék indítása</h3>
              <p className="text-slate-300 mb-8 text-lg">Biztosan új játékot indítasz? Az aktuális állás elveszik.</p>
              <div className="flex gap-4 justify-end">
                <button 
                  onClick={() => setShowRestartConfirm(false)}
                  className="px-6 py-3 rounded-xl font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Mégsem
                </button>
                <button 
                  onClick={() => {
                    setShowRestartConfirm(false);
                    startGame(gameMode);
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Új játék
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

