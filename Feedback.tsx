
import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-6 text-center animate-in zoom-in duration-500">
        <div className="w-32 h-32 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-6xl mx-auto mb-10">🎉</div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">Maraming Salamat!</h2>
        <p className="text-slate-500 text-xl font-medium mb-12">Your feedback helps us build a more inclusive platform for everyone.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="p-10 md:p-14">
          <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">User Feedback</h2>
          <p className="text-slate-500 font-medium text-lg mb-12 leading-relaxed">Tell us about your experience. Is the content clear? Is the chatbot helpful?</p>

          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Name (Optional)</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">I am a...</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium appearance-none transition-all">
                  <option>Student</option>
                  <option>Teacher</option>
                  <option>Parent</option>
                  <option>Advocate</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Overall Experience (1-5)</label>
                <span className="text-indigo-600 font-black text-xl">{rating}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="1"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between mt-3 text-[10px] font-black uppercase tracking-tighter text-slate-300">
                 <span>Poor</span>
                 <span>Excellent</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Content Clarity</label>
              <textarea 
                rows={3}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium transition-all resize-none"
                placeholder="Was the information easy to understand?"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Other Comments / Suggestions</label>
              <textarea 
                rows={4}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium transition-all resize-none"
                placeholder="Any bugs? Suggestions for new topics?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
