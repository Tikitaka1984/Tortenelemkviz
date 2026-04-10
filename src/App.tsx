import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Users, BookOpen, ArrowLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Home } from 'lucide-react';
import { generateGameData, Category, Question, Difficulty, QuestionType } from './data/questions';

type GameState = 'START' | 'RULES' | 'BOARD' | 'QUESTION' | 'FEEDBACK' | 'GAME_OVER';
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

const getTypeLabel = (type: QuestionType) => {
  switch(type) {
    case 'multiple_choice': return 'Feleletválasztós';
    case 'true_false': return 'Igaz-Hamis';
    case 'faulty_statement': return 'Hibás állítás';
    case 'timeline': return 'Időrend';
    case 'matching': return 'Párosítás';
    case 'cause_effect': return 'Ok-okozat';
    case 'comparison': return 'Összehasonlítás';
    default: return type;
  }
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>('START');
  const [gameMode, setGameMode] = useState<GameMode>('SINGLE');
  
  const [singleScore, setSingleScore] = useState(0);
  const [teamScores, setTeamScores] = useState({ A: 0, B: 0 });
  const [currentTurn, setCurrentTurn] = useState<TeamTurn>('A');
  
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const [gameCategories, setGameCategories] = useState<Category[]>([]);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);

  const startGame = (mode: GameMode) => {
    const { selectedCategories, selectedQuestions } = generateGameData();
    setGameCategories(selectedCategories);
    setGameQuestions(selectedQuestions);
    setGameMode(mode);
    setGameState('BOARD');
    setSingleScore(0);
    setTeamScores({ A: 0, B: 0 });
    setCurrentTurn('A');
    setAnsweredQuestions(new Set());
    setStats({ correct: 0, incorrect: 0 });
  };

  const handleQuestionClick = (q: Question) => {
    if (answeredQuestions.has(q.id)) return;
    setCurrentQuestion(q);
    setSelectedAnswer(null);
    setGameState('QUESTION');
  };

  const handleAnswer = (index: number) => {
    if (!currentQuestion || selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correctAnswerIndex;
    
    if (isCorrect) {
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
      setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id));
    
    setTimeout(() => {
      setGameState('FEEDBACK');
    }, 1000);
  };

  const closeFeedback = () => {
    if (gameMode === 'TEAM') {
      setCurrentTurn(prev => prev === 'A' ? 'B' : 'A');
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {gameState === 'START' && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600 mb-4 tracking-tight">
                Töri Mester
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium">Érettségi vetélkedő</p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md">
              <button 
                onClick={() => startGame('SINGLE')}
                className="group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
              >
                <Play className="w-6 h-6" />
                Egyéni játék
              </button>
              
              <button 
                onClick={() => startGame('TEAM')}
                className="group relative flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-500 text-white p-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)]"
              >
                <Users className="w-6 h-6" />
                Kétcsapatos játék
              </button>

              <button 
                onClick={() => setGameState('RULES')}
                className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-slate-300 p-5 rounded-2xl font-bold text-xl transition-all mt-4"
              >
                <BookOpen className="w-6 h-6" />
                Szabályok
              </button>
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

        {gameState === 'BOARD' && (
          <motion.div 
            key="board"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full"
          >
            {/* Header / Scoreboard */}
            <div className="flex justify-between items-center mb-8 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setGameState('START')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Vissza a főmenübe"
                >
                  <Home className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-display font-bold text-blue-400 hidden sm:block">Töri Mester</h2>
              </div>
              
              {gameMode === 'SINGLE' ? (
                <div className="text-3xl font-display font-bold text-yellow-400">
                  {singleScore} <span className="text-lg text-slate-500">pont</span>
                </div>
              ) : (
                <div className="flex items-center gap-8">
                  <div className={`flex flex-col items-center px-6 py-2 rounded-xl border-2 transition-colors ${currentTurn === 'A' ? 'border-blue-500 bg-blue-500/10' : 'border-transparent opacity-50'}`}>
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">A Csapat</span>
                    <span className="text-3xl font-display font-bold text-white">{teamScores.A}</span>
                  </div>
                  <div className={`flex flex-col items-center px-6 py-2 rounded-xl border-2 transition-colors ${currentTurn === 'B' ? 'border-purple-500 bg-purple-500/10' : 'border-transparent opacity-50'}`}>
                    <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">B Csapat</span>
                    <span className="text-3xl font-display font-bold text-white">{teamScores.B}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Game Board */}
            <div className="flex-1 grid grid-cols-5 gap-2 md:gap-4">
              {/* Category Headers */}
              {gameCategories.map(cat => (
                <div key={cat.id} className="bg-blue-950/50 border border-blue-900/50 rounded-xl p-2 md:p-4 flex items-center justify-center text-center">
                  <h3 className="font-display font-bold text-blue-200 text-sm md:text-lg leading-tight uppercase tracking-wide">
                    {cat.name}
                  </h3>
                </div>
              ))}
              
              {/* Question Cells */}
              {[100, 200, 300, 400, 500].map(points => (
                <React.Fragment key={points}>
                  {gameCategories.map(cat => {
                    const q = gameQuestions.find(q => q.categoryId === cat.id && q.points === points);
                    if (!q) return <div key={`${cat.id}-${points}`} />;
                    
                    const isAnswered = answeredQuestions.has(q.id);
                    
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleQuestionClick(q)}
                        disabled={isAnswered}
                        className={`
                          relative aspect-[4/3] rounded-xl flex items-center justify-center text-2xl md:text-4xl font-display font-bold transition-all duration-300
                          ${isAnswered 
                            ? 'bg-slate-900/30 border border-slate-800/50 text-slate-800 cursor-not-allowed' 
                            : 'bg-slate-800 border border-slate-700 text-yellow-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] cursor-pointer'
                          }
                        `}
                      >
                        {!isAnswered && points}
                      </button>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}

        {gameState === 'QUESTION' && currentQuestion && (
          <motion.div 
            key="question"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex-1 flex flex-col p-6 max-w-5xl mx-auto w-full justify-center"
          >
            <div className="text-center mb-12">
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
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQuestion.correctAnswerIndex;
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
              {selectedAnswer === currentQuestion.correctAnswerIndex ? (
                <div className="flex flex-col items-center text-emerald-400 mb-6">
                  <CheckCircle2 className="w-20 h-20 mb-4" />
                  <h2 className="text-4xl font-display font-bold">Helyes válasz!</h2>
                  <p className="text-emerald-400/80 font-medium mt-2">+{currentQuestion.points} pont</p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-rose-400 mb-6">
                  <XCircle className="w-20 h-20 mb-4" />
                  <h2 className="text-4xl font-display font-bold">Helytelen válasz</h2>
                  <p className="text-slate-400 mt-2">A helyes megoldás: <strong className="text-white">{currentQuestion.options[currentQuestion.correctAnswerIndex]}</strong></p>
                </div>
              )}

              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 text-left border border-slate-700/50">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            <Trophy className="w-24 h-24 text-yellow-400 mb-8" />
            <h2 className="text-5xl font-display font-bold text-white mb-2">Játék vége!</h2>
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 mt-8 w-full max-w-md text-center">
              {gameMode === 'SINGLE' ? (
                <>
                  <p className="text-slate-400 text-lg mb-2">Végső pontszám</p>
                  <div className="text-6xl font-display font-bold text-yellow-400 mb-6">{singleScore}</div>
                  <div className="inline-block px-6 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 font-bold text-xl mb-8">
                    Minősítés: {getRank(singleScore)}
                  </div>
                </>
              ) : (
                <div className="space-y-6 mb-8">
                  <div className={`p-6 rounded-2xl border-2 ${teamScores.A > teamScores.B ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-800 bg-slate-800/50'}`}>
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-2">A Csapat</p>
                    <p className="text-5xl font-display font-bold text-white">{teamScores.A}</p>
                  </div>
                  <div className={`p-6 rounded-2xl border-2 ${teamScores.B > teamScores.A ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-800 bg-slate-800/50'}`}>
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-2">B Csapat</p>
                    <p className="text-5xl font-display font-bold text-white">{teamScores.B}</p>
                  </div>
                  {teamScores.A === teamScores.B && (
                    <p className="text-xl font-bold text-slate-300">Döntetlen!</p>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-8 text-slate-400 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{stats.correct}</p>
                  <p className="text-sm uppercase tracking-wider mt-1">Helyes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rose-400">{stats.incorrect}</p>
                  <p className="text-sm uppercase tracking-wider mt-1">Hibás</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => startGame(gameMode)}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl font-bold text-lg transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  Újra játszom
                </button>
                <button 
                  onClick={() => setGameState('START')}
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 p-4 rounded-xl font-bold text-lg transition-all"
                >
                  <Home className="w-5 h-5" />
                  Főmenü
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

