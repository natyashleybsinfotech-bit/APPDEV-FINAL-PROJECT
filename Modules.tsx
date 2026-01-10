
import React, { useState, useMemo } from 'react';
import { MODULE_ITEMS } from './constants';
import { ModuleItem } from './types';

const Modules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Law' | 'Article' | 'Study'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const filteredItems = useMemo(() => {
    return MODULE_ITEMS.filter(item => {
      const matchesType = activeTab === 'All' || item.type === activeTab;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [activeTab, searchTerm]);

  if (selectedModule) {
    return (
      <div className="animate-in slide-in-from-right duration-500 px-6 max-w-5xl mx-auto pb-20">
        <button 
          onClick={() => setSelectedModule(null)}
          className="flex items-center gap-2 text-indigo-600 font-bold mb-10 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          Back to Library
        </button>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="relative h-96">
            <img src={selectedModule.icon} className="w-full h-full object-cover" alt={selectedModule.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-600 text-white px-4 py-1.5 rounded-full shadow-lg">
                    {selectedModule.type === 'Law' ? 'Legal Framework' : selectedModule.type}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full border border-white/30">
                    {selectedModule.region === 'PH' ? '🇵🇭 Philippines' : '🌎 Global'}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-sm">{selectedModule.title}</h1>
            </div>
          </div>

          <div className="p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div className="prose prose-slate prose-lg max-w-none">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6">In-Depth Overview</h4>
                  <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
                    {selectedModule.detailedContent}
                  </p>
                </div>

                {selectedModule.references && selectedModule.references.length > 0 && (
                  <div className="pt-10 border-t border-slate-100">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6">Authoritative References</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedModule.references.map((ref, i) => (
                        <a 
                          key={i}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl group hover:border-indigo-500 hover:bg-white transition-all shadow-sm"
                        >
                          <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600">{ref.label}</span>
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-indigo-50 rounded-[2.5rem] p-8 border border-indigo-100 shadow-inner">
                  <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-8 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></span>
                    Key Learnings
                  </h3>
                  <ul className="space-y-6">
                    {selectedModule.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 font-semibold text-sm leading-snug">
                        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                           <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Share this knowledge</p>
                   <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center">
                         <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </button>
                      <button className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center">
                         <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </button>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-16 mt-16 border-t border-slate-100">
              <a 
                href={selectedModule.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-5 bg-indigo-600 text-white rounded-2xl font-black shadow-2xl shadow-indigo-200 active:scale-95 transition-all text-center flex items-center justify-center gap-3"
              >
                Explore Full Official Source
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <button 
                onClick={() => setSelectedModule(null)}
                className="px-12 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black active:scale-95 transition-all hover:bg-slate-200"
              >
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 animate-in fade-in duration-500 max-w-7xl mx-auto">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Learning Library</h2>
          <p className="text-slate-500 font-medium">Equipping you with the knowledge to advocate for a fairer world.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl justify-end">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex items-center">
            {['All', 'Study', 'Law', 'Article'].map(t => (
              <button 
                  key={t}
                  onClick={() => setActiveTab(t as any)}
                  className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === t ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-indigo-600'
                  }`}
              >
                {t === 'Study' ? 'Lessons' : t === 'Law' ? 'Legal' : t === 'Article' ? 'Articles' : 'All'}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search library..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-bold text-sm transition-all"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedModule(item)}
            className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.15)] transition-all duration-700 cursor-pointer flex flex-col overflow-hidden transform hover:-translate-y-4"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.icon} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-lg backdrop-blur-md border border-white/20 text-white ${
                  item.type === 'Law' ? 'bg-red-500/80' : item.type === 'Study' ? 'bg-green-500/80' : 'bg-indigo-600/80'
                }`}>
                  {item.type === 'Law' ? 'Legal' : item.type === 'Study' ? 'Lesson' : 'Article'}
                </span>
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                 <span className="flex items-center gap-2 text-slate-400 text-[9px] font-black uppercase tracking-widest">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   8 min read
                 </span>
                 <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                   {item.region === 'PH' ? '🇵🇭 Local Context' : '🌎 Global Hub'}
                 </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 line-clamp-3 font-medium">
                {item.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-indigo-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
                <div className="w-10 h-10 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
                   <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="py-40 text-center animate-in fade-in zoom-in duration-500 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
           <div className="text-7xl mb-8">🔍</div>
           <h3 className="text-2xl font-black text-slate-900 mb-2">No matching resources found</h3>
           <p className="text-slate-500 mb-10">Try adjusting your filters or search terms.</p>
           <button 
             onClick={() => { setSearchTerm(''); setActiveTab('All'); }}
             className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all"
           >
             Show All Library Content
           </button>
        </div>
      )}
    </div>
  );
};

export default Modules;
