import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';

const TEACHER_PASSWORD = import.meta.env.VITE_TEACHER_PASSWORD || "";

type TeacherLoginProps = {
  onLoginSuccess: () => void;
  onBack: () => void;
};

export default function TeacherLogin({ onLoginSuccess, onBack }: TeacherLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === TEACHER_PASSWORD) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Helytelen jelszó!');
      setPassword('');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-2">Tanári mód</h2>
          <p className="text-slate-400 text-center">Ez a felület a kérdésbank szerkesztésére szolgál.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Jelszó</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Írd be a jelszót..."
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Belépés
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800">
          <button 
            onClick={onBack}
            className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a játékhoz
          </button>
        </div>
      </div>
    </div>
  );
}
