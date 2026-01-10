
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';

interface AnswerHistory {
  question: QuizQuestion;
  selectedOption: number;
}

const Quiz: React.FC = () => {
  const [questionsToAsk, setQuestionsToAsk] = useState<QuizQuestion[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [history, setHistory] = useState<AnswerHistory[]>([]);
  
  // Track IDs of questions used in the current session to prevent repetition
  const [sessionUsedQuestions, setSessionUsedQuestions] = useState<string[]>([]);

  const initQuiz = () => {
    // Filter out questions used in previous rounds of this session to prevent repetition
    let availableQuestions = QUIZ_QUESTIONS.filter(
      q => !sessionUsedQuestions.includes(q.question)
    );

    // If we've exhausted the pool or don't have enough for a new set of 5, reset the pool
    if (availableQuestions.length < 5) {
      availableQuestions = [...QUIZ_QUESTIONS];
      setSessionUsedQuestions([]);
    }

    // Shuffle and pick 5
    const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    // Record these as used for future retakes in this session
    const newUsed = selected.map(q => q.question);
    setSessionUsedQuestions(prev => [...prev, ...newUsed]);

    setQuestionsToAsk(selected);
    setCurrentStep(0);
    setShowResult(false);
    setSelectedOption(null);
    setHistory([]);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    // Record the answer in history
    const newHistoryItem = {
      question: questionsToAsk[currentStep],
      selectedOption: selectedOption
    };
    const updatedHistory = [...history, newHistoryItem];
    setHistory(updatedHistory);

    if (currentStep + 1 < questionsToAsk.length) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (questionsToAsk.length === 0) return (
    <div className="flex items-center justify-center py-40">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (showResult) {
    const score = history.filter(h => h.selectedOption === h.question.correctAnswer).length;
    
    return (
      <div className="max-w-4xl mx-auto py-10 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 text-center mb-10 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner animate-bounce">
              {score >= 4 ? '🏆' : score >= 3 ? '🥈' : '📚'}
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Quiz Complete!</h2>
            <p className="text-slate-500 font-medium text-lg mb-10 max-w-md mx-auto">
              {score === 5 ? "Incredible! You have a perfect understanding of gender equality." : 
               score >= 3 ? "Great job! You have a strong grasp of the fundamentals." : 
               "Good effort! Review the answers below to learn more."}
            </p>
            
            <div className="bg-slate-50 rounded-3xl p-10 mb-10 inline-block min-w-[240px] border border-slate-100">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Final Score</p>
               <div className="text-7xl font-black text-indigo-600">
                 {score}<span className="text-slate-200 mx-2">/</span>5
               </div>
               <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden w-full">
                  <div 
                    className="h-full bg-indigo-600 transition-all duration-1000" 
                    style={{ width: `${(score/5)*100}%` }}
                  ></div>
               </div>
            </div>
            
            <button 
              onClick={initQuiz}
              className="block w-full sm:w-72 mx-auto py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Retake (New Questions)
            </button>
          </div>
        </div>

        {/* Detailed Review Section - Reveal Correct/Wrong Answers Here */}
        <div className="space-y-8">
          <div className="flex items-center justify-between px-4">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </div>
              Revealed Answers & Explanations
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {history.map((h, i) => {
              const isCorrect = h.selectedOption === h.question.correctAnswer;
              return (
                <div key={i} className={`bg-white p-8 rounded-[2.5rem] border-2 shadow-sm transition-all hover:shadow-md ${isCorrect ? 'border-green-100' : 'border-red-100'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                       <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-black text-slate-500 shrink-0">
                         {i + 1}
                       </span>
                       <p className="font-bold text-slate-800">{h.question.question}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-center ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className={`p-5 rounded-2xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Your Choice</p>
                      <p className={`text-sm font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                         {h.question.options[h.selectedOption]}
                      </p>
                    </div>
                    {!isCorrect && (
                      <div className="p-5 rounded-2xl border bg-green-50 border-green-200">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Correct Answer</p>
                        <p className="text-sm font-bold text-green-700">
                           {h.question.options[h.question.correctAnswer]}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                     <div className="flex items-center gap-2 mb-3">
                       <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-black">?</div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Educational Insight</h4>
                     </div>
                     <p className="text-xs font-medium text-slate-600 leading-relaxed italic">
                        {h.question.explanation}
                     </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="pt-10 text-center">
             <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline"
             >
               Back to Top
             </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questionsToAsk[currentStep];

  return (
    <div className="max-w-2xl mx-auto py-10 px-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100">
           <div 
            className="h-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
           ></div>
        </div>

        <div className="p-10 md:p-14">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black">
                {currentStep + 1}
              </div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Question {currentStep + 1}</h2>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Exam Mode
            </span>
          </div>

          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-12 leading-snug">
            {q.question}
          </p>

          <div className="space-y-4">
            {q.options.map((opt, i) => {
              const isSelected = selectedOption === i;
              
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all font-bold text-sm leading-tight flex justify-between items-center group active:scale-[0.98] ${
                    isSelected 
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-lg shadow-indigo-100 ring-4 ring-indigo-500/10" 
                    : "border-slate-100 bg-white hover:border-indigo-200 hover:bg-slate-50"
                  }`}
                >
                  <span className="pr-4">{opt}</span>
                  <div className="shrink-0">
                    <div className={`w-6 h-6 rounded-full border-2 transition-colors flex items-center justify-center ${
                      isSelected ? "border-indigo-600 bg-white" : "border-slate-200 group-hover:border-indigo-300"
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12">
            <button 
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`w-full py-5 rounded-2xl font-black shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
                selectedOption !== null 
                ? "bg-indigo-600 text-white shadow-indigo-100 hover:bg-indigo-700" 
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              {currentStep + 1 === 5 ? 'Finish & Reveal Results' : 'Confirm & Next'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
            <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest mt-6">
              Answers will be revealed at the end of the quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
