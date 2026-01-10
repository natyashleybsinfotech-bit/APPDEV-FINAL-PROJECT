
import React, { useState, useEffect, useCallback } from 'react';
import { View } from './types';
import Modules from './components/Modules';
import ChatInterface from './components/ChatInterface';
import Quiz from './components/Quiz';
import Feedback from './components/Feedback';
import StatChart from './components/StatChart';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isApiKeyReady, setIsApiKeyReady] = useState<boolean>(true);

  // Check for API Key selection on mount (Required for Gemini 3 series)
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setIsApiKeyReady(hasKey);
      } else {
        // If not in the specific environment that requires selection, assume key is pre-configured
        setIsApiKeyReady(!!process.env.API_KEY);
      }
    };
    checkKey();
  }, []);

  const handleConnectKey = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      // Assume success after triggering the dialog to mitigate race conditions
      setIsApiKeyReady(true);
    }
  };

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
      tag: "SPORTS EQUALITY",
      title: "Breaking Barriers in Sports",
      subtitle: "Promoting Equality",
      desc: "Empowering every athlete regardless of gender identity to compete, thrive, and inspire on equal ground."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      tag: "STEM REPRESENTATION",
      title: "Closing the Gap in STEM",
      subtitle: "Future of Innovation",
      desc: "Ensuring equal opportunities for women in Science, Technology, Engineering, and Mathematics to solve global challenges."
    },
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
      tag: "LEGAL AWARENESS",
      title: "Know Your Rights & Laws",
      subtitle: "Safe Spaces for All",
      desc: "Deep diving into the Magna Carta of Women and the Safe Spaces Act to build a safer Philippines."
    },
    {
      image: "https://images.unsplash.com/photo-1523240715639-93f8bb0a9969?auto=format&fit=crop&q=80&w=2000",
      tag: "INCLUSIVE EDUCATION",
      title: "Diversity in the Classroom",
      subtitle: "Learning Together",
      desc: "Fostering educational environments where gender diversity is respected and every student can excel."
    }
  ];

  const facts = [
    "In the Philippines, the Magna Carta of Women was signed in 2009.",
    "The Safe Spaces Act (RA 11313) protects you from online catcalling.",
    "Filipino women currently outperform men in higher education completion rates.",
    "Gender equality is a fundamental human right recognized by the UN."
  ];
  const [currentFactIdx, setCurrentFactIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 6000);
    const factTimer = setInterval(() => {
      setCurrentFactIdx((prev) => (prev + 1) % facts.length);
    }, 8000);
    return () => {
      clearInterval(slideTimer);
      clearInterval(factTimer);
    };
  }, [nextSlide]);

  if (!isApiKeyReady) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-inter">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
             <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">AI Connection Required</h2>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            To use the EDGE-AI Chatbot and educational research tools, you must select an API key from a paid GCP project.
          </p>
          <div className="space-y-4">
            <button 
              onClick={handleConnectKey}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Select Gemini API Key
            </button>
            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
            >
              View Billing Documentation
            </a>
          </div>
          <p className="mt-12 text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
            EDGE-AI: EQUALITY DEVELOPMENT & GENDER EDUCATION
          </p>
        </div>
      </div>
    );
  }

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              idx === currentSlide ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-110 translate-x-full'
            }`}
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover brightness-[0.3]"
              alt={slide.title}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <span className="inline-block px-4 py-1.5 bg-indigo-600/40 backdrop-blur-md border border-indigo-400/50 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-bottom-2 duration-500">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full inline-block mr-2 animate-pulse"></span>
                  {slide.tag}
                </span>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight animate-in slide-in-from-bottom-4 duration-700">
                  {slide.title} <br/> <span className="text-white/80 italic font-medium">{slide.subtitle}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium animate-in slide-in-from-bottom-6 duration-1000">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in slide-in-from-bottom-8 duration-1000">
                  <button 
                    onClick={() => setCurrentView(View.MODULES)}
                    className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold shadow-xl active:scale-95 transition-all hover:bg-slate-100"
                  >
                    Start Reading
                  </button>
                  <button 
                    onClick={() => setCurrentView(View.CHAT)}
                    className="bg-slate-900/40 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold active:scale-95 transition-all hover:bg-slate-800"
                  >
                    Ask AI Assistant
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-12 flex justify-center gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Arrow Navigation */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm hidden md:block z-20"
        >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm hidden md:block z-20"
        >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </section>

      {/* Did You Know Ticker */}
      <section className="bg-indigo-900 text-white py-4 px-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4 max-w-5xl mx-auto w-full">
          <div className="bg-indigo-600 p-2 rounded-full shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          </div>
          <div className="flex-1 overflow-hidden">
             <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-0.5">Live Learning Feed</p>
             <p className="text-sm font-medium transition-all duration-500">{facts[currentFactIdx]}</p>
          </div>
          <button 
            onClick={() => setCurrentFactIdx((prev) => (prev + 1) % facts.length)}
            className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Refresh
          </button>
        </div>
      </section>

      {/* Explore Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Platform Core Features</h2>
           <p className="text-slate-500 font-medium text-lg">Comprehensive tools designed for your advocacy and learning journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: View.MODULES, title: "Library & Articles", desc: "Access comprehensive lessons on laws, SOGIE, and read featured articles on global gender issues.", icon: "📖", color: "bg-blue-50 text-blue-600" },
              { id: View.CHAT, title: "AI Companion", desc: "Have a safe, private conversation about gender equality questions with our smart AI assistant.", icon: "💬", color: "bg-indigo-50 text-indigo-600" },
              { id: View.STATISTICS, title: "Data Statistics", desc: "Analyze localized data and visual representations of gender disparities in the Philippines.", icon: "📊", color: "bg-rose-50 text-rose-600" },
              { id: View.QUIZ, title: "Take a Quiz", desc: "Challenge yourself and test your knowledge on Philippine laws and gender concepts.", icon: "🎯", color: "bg-amber-50 text-amber-600" }
            ].map((tool, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentView(tool.id)}
                className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div className={`text-3xl ${tool.color} w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>{tool.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{tool.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <span className="absolute top-6 left-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl z-10 flex items-center gap-2 shadow-xl">
                 <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 Featured Reading
              </span>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Featured" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 block">RECOMMENDED STUDY</span>
              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">Breaking the Glass Ceiling: Women in STEM</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">An analysis of why women are underrepresented in Science, Technology, Engineering, and Math.</p>
              <button onClick={() => setCurrentView(View.MODULES)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black shadow-lg hover:bg-black transition-all active:scale-95 mt-auto">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfdff] flex flex-col font-inter selection:bg-indigo-100 selection:text-indigo-900">
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView(View.HOME)}>
            <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100 group-hover:rotate-6 transition-transform">
               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">GENDER EQUALITY <span className="text-indigo-600">PLATFORM</span></span>
          </div>
          
          <div className="hidden lg:flex gap-1 items-center text-xs font-black uppercase tracking-widest text-slate-400">
            {[
              { label: 'Home', view: View.HOME }, 
              { label: 'Modules', view: View.MODULES }, 
              { label: 'AI Chatbot', view: View.CHAT }, 
              { label: 'Statistics', view: View.STATISTICS }, 
              { label: 'Quiz', view: View.QUIZ }, 
              { label: 'Feedback', view: View.FEEDBACK }
            ].map((nav) => (
              <button 
                key={nav.label}
                onClick={() => setCurrentView(nav.view)}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  currentView === nav.view 
                    ? 'text-indigo-600 bg-indigo-50 shadow-inner' 
                    : 'hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
             <button className="lg:hidden p-3 bg-slate-50 text-slate-600 rounded-xl">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {currentView === View.HOME ? renderHome() : (
          <div className="max-w-7xl mx-auto py-16">
            {currentView === View.MODULES && <Modules />}
            {currentView === View.CHAT && <ChatInterface />}
            {currentView === View.STATISTICS && <StatChart />}
            {currentView === View.QUIZ && <Quiz />}
            {currentView === View.FEEDBACK && <Feedback />}
          </div>
        )}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
           <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 </div>
                 <span className="text-2xl font-black text-white tracking-tighter uppercase">GENDER EQUALITY PLATFORM</span>
              </div>
              <p className="max-w-md text-sm leading-relaxed font-medium text-slate-500 mb-8">
                Empowering the next generation with knowledge, empathy, and advocacy to create a more equitable Philippines and world. Join our mission to dismantle biases through education and AI technology.
              </p>
              <div className="flex gap-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                       <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                    </div>
                 ))}
              </div>
           </div>
           <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Resources</h4>
              <ul className="space-y-4 text-sm font-bold">
                 <li><button onClick={() => setCurrentView(View.MODULES)} className="hover:text-white transition-colors">Legal Library</button></li>
                 <li><button onClick={() => setCurrentView(View.STATISTICS)} className="hover:text-white transition-colors">PSA Statistics</button></li>
                 <li><button onClick={() => setCurrentView(View.CHAT)} className="hover:text-white transition-colors">AI Research Assistant</button></li>
                 <li><button onClick={() => setCurrentView(View.QUIZ)} className="hover:text-white transition-colors">Knowledge Challenge</button></li>
              </ul>
           </div>
           <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Support</h4>
              <ul className="space-y-4 text-sm font-bold">
                 <li><button onClick={() => setCurrentView(View.FEEDBACK)} className="hover:text-white transition-colors">Submit Feedback</button></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
           </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>@2026 Gender Equality Awareness Platform. All rights reserved.</p>
          <div className="flex gap-8 text-slate-600">
             <span>PHILIPPINES BASED</span>
             <span>EDU-TECH SOLUTIONS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
