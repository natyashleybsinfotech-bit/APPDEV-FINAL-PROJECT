
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './types';
import { sendMessageToGemini } from './geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I am EDGE-AI. I'm your Gender Equality Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customMsg?: string) => {
    const textToSend = customMsg || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    if (!customMsg) setInput('');
    setIsLoading(true);

    const response = await sendMessageToGemini(messages, textToSend);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const suggestions = [
    "What is the Safe Spaces Act?",
    "Difference between sex and gender?",
    "How to be a good ally?",
    "Explain SOGIE simply.",
    "Examples of gender stereotypes?"
  ];

  return (
    <div className="flex flex-col h-[750px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-indigo-600 p-6 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight">Gender Equality AI Assistant</h2>
            <div className="flex items-center gap-1.5">
               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
               <span className="text-indigo-100 text-[10px] font-bold uppercase tracking-wider">Online & Ready to help</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([messages[0]])}
          className="p-3 hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          Reset
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
              {msg.role === 'user' ? 'U' : '🤖'}
            </div>
            <div className={`group relative max-w-[85%] px-6 py-4 rounded-3xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.text}</p>
              <div className={`text-[9px] mt-2 font-bold uppercase tracking-tighter ${msg.role === 'user' ? 'text-indigo-200' : 'text-slate-400'}`}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-500 flex items-center justify-center shrink-0">🤖</div>
            <div className="bg-white border border-slate-200 rounded-3xl rounded-tl-none px-6 py-4 shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input & Chips */}
      <div className="p-8 bg-white border-t border-slate-100">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mr-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Try asking:
          </span>
          {suggestions.map(s => (
            <button 
              key={s} 
              onClick={() => handleSend(s)}
              className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question about gender equality here..."
            className="w-full px-8 py-4.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium transition-all pr-16"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-all disabled:opacity-30 disabled:grayscale active:scale-90 shadow-lg shadow-indigo-100"
          >
            <svg className="w-6 h-6 rotate-45" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
          </button>
        </div>
        <p className="text-center text-[9px] text-slate-400 mt-6 font-bold uppercase tracking-widest">
           AI can make mistakes. Please verify important legal or medical information.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
