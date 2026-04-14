import React, { useState, useRef } from 'react';
import { BoardCell, Category, QuestionItem, QuestionType, Difficulty } from '../data/questions';
import { ArrowLeft, Save, Plus, Edit2, Trash2, Download, Search, LogOut, Upload } from 'lucide-react';

type TeacherModeProps = {
  board: BoardCell[];
  categories: Category[];
  onSaveBoard: (newBoard: BoardCell[]) => void;
  onExit: () => void;
  onLogout: () => void;
};

type ViewState = 'DASHBOARD' | 'LIST' | 'EDIT';

export default function TeacherMode({ board, categories, onSaveBoard, onExit, onLogout }: TeacherModeProps) {
  const [view, setViewState] = useState<ViewState>('DASHBOARD');
  const [editingQuestion, setEditingQuestion] = useState<{ cellIndex: number, qIndex: number } | null>(null);
  
  // Form state
  const [formData, setFormData] = useState<Partial<QuestionItem> & { categoryId?: string, points?: number }>({});
  
  // Filter state
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [filterPoints, setFilterPoints] = useState<string>('ALL');
  const [filterTopic, setFilterTopic] = useState<string>('ALL');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const dataStr = JSON.stringify(board, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'tori_mester_kerdesbank.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);
        
        // Basic validation to ensure it looks like a BoardCell array
        if (Array.isArray(parsed) && parsed.length > 0 && 'categoryId' in parsed[0] && 'questions' in parsed[0]) {
          if (window.confirm('Biztosan felülírod a jelenlegi kérdésbankot az importált fájllal? Ez a művelet nem vonható vissza.')) {
            onSaveBoard(parsed);
            alert('Sikeres importálás!');
          }
        } else {
          alert('Érvénytelen fájlformátum. Kérlek, a korábban exportált JSON fájlt használd.');
        }
      } catch (error) {
        console.error('Import error:', error);
        alert('Hiba történt a fájl beolvasása során. Érvénytelen JSON.');
      }
      
      // Reset input so the same file can be selected again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleAddNew = () => {
    setFormData({
      id: `q_new_${Date.now()}`,
      categoryId: categories[0].id,
      points: 100,
      difficulty: 'medium',
      questionType: 'multiple_choice',
      topic: '',
      question: '',
      options: ['', '', '', ''],
      correctAnswerIndex: 0,
      explanation: '',
      skillFocus: '',
      oralExamLink: '',
      notes: '',
      isActive: true,
      createdBy: 'teacher'
    });
    setEditingQuestion(null);
    setViewState('EDIT');
  };

  const handleEdit = (cellIndex: number, qIndex: number) => {
    const cell = board[cellIndex];
    const q = cell.questions[qIndex];
    setFormData({
      ...q,
      categoryId: cell.categoryId,
      points: cell.points,
      options: [...q.options]
    });
    setEditingQuestion({ cellIndex, qIndex });
    setViewState('EDIT');
  };

  const handleDelete = (cellIndex: number, qIndex: number) => {
    if (!window.confirm('Biztosan törölni szeretnéd ezt a kérdést?')) return;
    
    const newBoard = [...board];
    newBoard[cellIndex] = {
      ...newBoard[cellIndex],
      questions: newBoard[cellIndex].questions.filter((_, i) => i !== qIndex)
    };
    onSaveBoard(newBoard);
  };

  const handleSaveQuestion = () => {
    if (!formData.question || !formData.categoryId || !formData.points) {
      alert('Kérlek tölts ki minden kötelező mezőt!');
      return;
    }

    const newBoard = [...board];
    
    // Find target cell
    const targetCellIndex = newBoard.findIndex(c => c.categoryId === formData.categoryId && c.points === formData.points);
    
    if (targetCellIndex === -1) {
      alert('Nem található ilyen kategória-pont kombináció a táblán!');
      return;
    }

    const questionToSave: QuestionItem = {
      id: formData.id || `q_new_${Date.now()}`,
      difficulty: formData.difficulty as Difficulty || 'medium',
      questionType: formData.questionType as QuestionType || 'multiple_choice',
      topic: formData.topic || '',
      question: formData.question || '',
      options: formData.options || ['', '', '', ''],
      correctAnswerIndex: formData.correctAnswerIndex || 0,
      explanation: formData.explanation || '',
      skillFocus: formData.skillFocus || '',
      oralExamLink: formData.oralExamLink || '',
      notes: formData.notes || '',
      isActive: formData.isActive !== undefined ? formData.isActive : true,
      createdBy: formData.createdBy || 'teacher',
      lastEdited: new Date().toISOString().split('T')[0]
    };

    if (editingQuestion) {
      // If category or points changed, we need to move it
      const oldCell = newBoard[editingQuestion.cellIndex];
      if (oldCell.categoryId !== formData.categoryId || oldCell.points !== formData.points) {
        // Remove from old
        newBoard[editingQuestion.cellIndex] = {
          ...oldCell,
          questions: oldCell.questions.filter((_, i) => i !== editingQuestion.qIndex)
        };
        // Add to new
        newBoard[targetCellIndex] = {
          ...newBoard[targetCellIndex],
          questions: [...newBoard[targetCellIndex].questions, questionToSave]
        };
      } else {
        // Update in place
        const updatedQuestions = [...oldCell.questions];
        updatedQuestions[editingQuestion.qIndex] = questionToSave;
        newBoard[editingQuestion.cellIndex] = {
          ...oldCell,
          questions: updatedQuestions
        };
      }
    } else {
      // Add new
      newBoard[targetCellIndex] = {
        ...newBoard[targetCellIndex],
        questions: [...newBoard[targetCellIndex].questions, questionToSave]
      };
    }

    onSaveBoard(newBoard);
    setViewState('LIST');
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'multiple_choice': return 'Feleletválasztós';
      case 'true_false': return 'Igaz-Hamis';
      case 'faulty_statement': return 'Hibás állítás';
      case 'cause_effect': return 'Ok-okozat';
      case 'comparison': return 'Összehasonlítás';
      default: return type;
    }
  };

  if (view === 'DASHBOARD') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-display font-bold mb-2 text-blue-400">Tanári mód</h2>
        <p className="text-slate-400 mb-12 text-lg">Kérdésbank kezelése</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <button 
            onClick={() => setViewState('LIST')}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all border border-slate-700"
          >
            <Search className="w-10 h-10 text-blue-400" />
            <span className="text-xl font-bold">Kérdések megtekintése</span>
          </button>
          
          <button 
            onClick={handleAddNew}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all border border-slate-700"
          >
            <Plus className="w-10 h-10 text-green-400" />
            <span className="text-xl font-bold">Új kérdés hozzáadása</span>
          </button>
          
          <button 
            onClick={handleExport}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all border border-slate-700"
          >
            <Download className="w-10 h-10 text-purple-400" />
            <span className="text-xl font-bold">Kérdésbank exportálása</span>
          </button>
          
          <button 
            onClick={handleImportClick}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all border border-slate-700"
          >
            <Upload className="w-10 h-10 text-orange-400" />
            <span className="text-xl font-bold">Kérdésbank importálása</span>
          </button>
          
          <button 
            onClick={onExit}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all border border-slate-700 md:col-span-2"
          >
            <ArrowLeft className="w-10 h-10 text-slate-400" />
            <span className="text-xl font-bold">Vissza a játékhoz</span>
          </button>
        </div>
        
        <input 
          type="file" 
          accept=".json" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
        />
        
        <div className="mt-12">
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors px-4 py-2 rounded-lg hover:bg-slate-800"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Kijelentkezés</span>
          </button>
        </div>
      </div>
    );
  }

  if (view === 'LIST') {
    let allQuestionsList: { cellIndex: number, qIndex: number, cell: BoardCell, q: QuestionItem }[] = [];
    board.forEach((cell, cellIndex) => {
      cell.questions.forEach((q, qIndex) => {
        allQuestionsList.push({ cellIndex, qIndex, cell, q });
      });
    });

    // Apply filters
    if (filterCategory !== 'ALL') {
      allQuestionsList = allQuestionsList.filter(item => item.cell.categoryId === filterCategory);
    }
    if (filterPoints !== 'ALL') {
      allQuestionsList = allQuestionsList.filter(item => item.cell.points.toString() === filterPoints);
    }
    if (filterTopic !== 'ALL') {
      allQuestionsList = allQuestionsList.filter(item => (item.q.topic || '') === filterTopic);
    }
    if (filterType !== 'ALL') {
      allQuestionsList = allQuestionsList.filter(item => item.q.questionType === filterType);
    }
    if (searchQuery) {
      const lowerQ = searchQuery.toLowerCase();
      allQuestionsList = allQuestionsList.filter(item => item.q.question.toLowerCase().includes(lowerQ));
    }

    // Get unique topics for the filter dropdown
    const uniqueTopics = Array.from(new Set(
      board.flatMap(cell => cell.questions.map(q => q.topic)).filter(t => t && t.trim() !== '')
    )).sort();

    return (
      <div className="flex-1 flex flex-col p-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setViewState('DASHBOARD')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-display font-bold text-blue-400">Kérdések listája</h2>
          </div>
          <button onClick={handleAddNew} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus className="w-5 h-5" />
            Új kérdés
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6 flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-slate-400 mb-1">Keresés</label>
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Keresés a kérdésekben..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-400 mb-1">Kategória</label>
            <select 
              value={filterCategory} 
              onChange={e => setFilterCategory(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">Minden kategória</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-400 mb-1">Tétel</label>
            <select 
              value={filterTopic} 
              onChange={e => setFilterTopic(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">Minden tétel</option>
              {uniqueTopics.map(t => <option key={t as string} value={t as string}>{t as string}</option>)}
            </select>
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium text-slate-400 mb-1">Pontérték</label>
            <select 
              value={filterPoints} 
              onChange={e => setFilterPoints(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">Összes</option>
              {[100, 200, 300, 400, 500].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-400 mb-1">Típus</label>
            <select 
              value={filterType} 
              onChange={e => setFilterType(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="ALL">Minden típus</option>
              <option value="multiple_choice">Feleletválasztós</option>
              <option value="true_false">Igaz-Hamis</option>
              <option value="faulty_statement">Hibás állítás</option>
              <option value="cause_effect">Ok-okozat</option>
              <option value="comparison">Összehasonlítás</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex-1 flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-300">
              <thead className="bg-slate-800/50 text-slate-400 text-sm uppercase">
                <tr>
                  <th className="px-4 py-3">Kategória</th>
                  <th className="px-4 py-3">Tétel</th>
                  <th className="px-4 py-3">Pont</th>
                  <th className="px-4 py-3">Típus</th>
                  <th className="px-4 py-3">Nehézség</th>
                  <th className="px-4 py-3 w-1/3">Kérdés</th>
                  <th className="px-4 py-3 w-1/4">Magyarázat</th>
                  <th className="px-4 py-3 text-right">Műveletek</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {allQuestionsList.map((item) => (
                  <tr key={item.q.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 text-sm">{item.cell.categoryName}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{item.q.topic || '-'}</td>
                    <td className="px-4 py-3 font-bold text-yellow-400">{item.cell.points}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{getTypeLabel(item.q.questionType)}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{item.q.difficulty === 'easy' ? 'Könnyű' : item.q.difficulty === 'medium' ? 'Közepes' : item.q.difficulty === 'hard' ? 'Nehéz' : 'Szakértő'}</td>
                    <td className="px-4 py-3 text-sm line-clamp-2" title={item.q.question}>{item.q.question}</td>
                    <td className="px-4 py-3 text-sm text-slate-500 truncate max-w-[200px]" title={item.q.explanation}>{item.q.explanation}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEdit(item.cellIndex, item.qIndex)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded transition-colors" title="Szerkesztés">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item.cellIndex, item.qIndex)} className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors" title="Törlés">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {allQuestionsList.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                      Nincs a szűrésnek megfelelő kérdés.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'EDIT') {
    return (
      <div className="flex-1 flex flex-col p-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setViewState('LIST')} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-display font-bold text-blue-400">
              {editingQuestion ? 'Kérdés szerkesztése' : 'Új kérdés hozzáadása'}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {!editingQuestion && (
              <button onClick={handleAddNew} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Űrlap törlése
              </button>
            )}
            {editingQuestion && (
              <button 
                onClick={() => {
                  handleDelete(editingQuestion.cellIndex, editingQuestion.qIndex);
                  setViewState('LIST');
                }} 
                className="flex items-center gap-2 bg-red-900/50 hover:bg-red-800/50 text-red-200 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Törlés
              </button>
            )}
            <button onClick={() => setViewState('LIST')} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Mégse
            </button>
            <button onClick={handleSaveQuestion} className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              <Save className="w-5 h-5" />
              Mentés
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Kategória</label>
              <select 
                value={formData.categoryId || ''} 
                onChange={e => setFormData({...formData, categoryId: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Tétel (opcionális)</label>
              <input 
                type="text"
                value={formData.topic || ''} 
                onChange={e => setFormData({...formData, topic: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                placeholder="Pl. A reformkor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Pontérték</label>
              <select 
                value={formData.points || 100} 
                onChange={e => setFormData({...formData, points: parseInt(e.target.value)})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                {[100, 200, 300, 400, 500].map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Kérdéstípus</label>
              <select 
                value={formData.questionType || 'multiple_choice'} 
                onChange={e => setFormData({...formData, questionType: e.target.value as QuestionType})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="multiple_choice">Feleletválasztós</option>
                <option value="true_false">Igaz-Hamis</option>
                <option value="faulty_statement">Hibás állítás</option>
                <option value="cause_effect">Ok-okozat</option>
                <option value="comparison">Összehasonlítás</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Nehézség</label>
              <select 
                value={formData.difficulty || 'medium'} 
                onChange={e => setFormData({...formData, difficulty: e.target.value as Difficulty})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="easy">Könnyű</option>
                <option value="medium">Közepes</option>
                <option value="hard">Nehéz</option>
                <option value="expert">Szakértő</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Kérdés szövege</label>
            <textarea 
              value={formData.question || ''} 
              onChange={e => setFormData({...formData, question: e.target.value})}
              rows={3}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Írd ide a kérdést..."
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-400">Válaszlehetőségek</label>
            {[0, 1, 2, 3].map(index => (
              <div key={index} className="flex items-center gap-4">
                <input 
                  type="radio" 
                  name="correctAnswer" 
                  checked={formData.correctAnswerIndex === index}
                  onChange={() => setFormData({...formData, correctAnswerIndex: index})}
                  className="w-5 h-5 text-blue-500 bg-slate-800 border-slate-700 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  value={formData.options?.[index] || ''}
                  onChange={e => {
                    const newOptions = [...(formData.options || ['', '', '', ''])];
                    newOptions[index] = e.target.value;
                    setFormData({...formData, options: newOptions});
                  }}
                  className={`flex-1 bg-slate-800 border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 ${formData.correctAnswerIndex === index ? 'border-green-500' : 'border-slate-700'}`}
                  placeholder={`${String.fromCharCode(65 + index)} válasz...`}
                />
              </div>
            ))}
            <p className="text-xs text-slate-500 mt-1">Jelöld be a rádiógombot a helyes válasz mellett!</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Rövid magyarázat</label>
            <textarea 
              value={formData.explanation || ''} 
              onChange={e => setFormData({...formData, explanation: e.target.value})}
              rows={2}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Magyarázat a helyes válaszhoz..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Készségfókusz (skillFocus)</label>
              <select 
                value={formData.skillFocus || ''} 
                onChange={e => setFormData({...formData, skillFocus: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Nincs megadva</option>
                <option value="fogalom">Fogalom</option>
                <option value="évszám">Évszám</option>
                <option value="személy">Személy</option>
                <option value="topográfia">Topográfia</option>
                <option value="ok-okozat">Ok-okozat</option>
                <option value="összehasonlítás">Összehasonlítás</option>
                <option value="korszakjellemzés">Korszakjellemzés</option>
                <option value="következtetés">Következtetés</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Szóbeli tétel kapcsolat (oralExamLink)</label>
              <input 
                type="text"
                value={formData.oralExamLink || ''} 
                onChange={e => setFormData({...formData, oralExamLink: e.target.value})}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
                placeholder="Pl. Kapcsolódik a reformkori fő kérdésekhez."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Jegyzetek (notes)</label>
            <textarea 
              value={formData.notes || ''} 
              onChange={e => setFormData({...formData, notes: e.target.value})}
              rows={2}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Saját megjegyzések a kérdéshez..."
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
