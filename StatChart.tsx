
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  PSA_LITERACY_ENROLLMENT_DATA, 
  PSA_ATTAINMENT_DATA, 
  PSA_GRADUATES_BY_DISCIPLINE, 
  PSA_ECONOMIC_PARTICIPATION 
} from './constants';

const StatChart: React.FC = () => {
  const [activeSet, setActiveSet] = useState<'education' | 'attainment' | 'graduates' | 'economic'>('education');

  const datasetMap = {
    education: {
      title: "Literacy & Enrollment Trends",
      data: PSA_LITERACY_ENROLLMENT_DATA,
      unit: "%",
      desc: "Trends in basic literacy and institutional completion rates among Filipino youth."
    },
    attainment: {
      title: "Educational Attainment Distribution",
      data: PSA_ATTAINMENT_DATA,
      unit: "%",
      desc: "Highest educational level achieved by the population 6 years old and over."
    },
    graduates: {
      title: "Tertiary Graduates by Discipline",
      data: PSA_GRADUATES_BY_DISCIPLINE,
      unit: "",
      desc: "Number of college graduates categorized by their specific fields of study."
    },
    economic: {
      title: "Economic Participation Indicators",
      data: PSA_ECONOMIC_PARTICIPATION,
      unit: "%",
      desc: "Labor force participation, employment, and unemployment rates by gender."
    }
  };

  const current = datasetMap[activeSet];

  return (
    <div className="px-6 animate-in fade-in duration-500 max-w-7xl mx-auto pb-20">
      <header className="mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Philippines 2024 Gender Statistics</h2>
        <p className="text-slate-500 font-medium">Official data extracted from the 'Women and Men Fact Sheet 2024' (PSA/CHED/DepEd).</p>
      </header>

      {/* Dataset Selector Chips */}
      <div className="flex flex-wrap gap-4 mb-12">
        {(Object.keys(datasetMap) as Array<keyof typeof datasetMap>).map((key) => (
          <button 
            key={key}
            onClick={() => setActiveSet(key)}
            className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
              activeSet === key 
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                : 'bg-white border-slate-100 text-slate-400 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Detail Card */}
        <div className="lg:col-span-1 bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 flex flex-col">
           <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
           </div>
           <h3 className="text-xl font-black text-slate-900 mb-4">{current.title}</h3>
           <p className="text-sm text-slate-600 font-medium leading-relaxed mb-10">{current.desc}</p>
           
           <div className="mt-auto space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Male Data Point</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Female Data Point</span>
              </div>
           </div>
        </div>

        {/* Chart View */}
        <div className="lg:col-span-3 bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
          <div className="w-full h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={current.data}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  type="number"
                  stroke="#94a3b8" 
                  fontSize={10} 
                  fontWeight={800}
                  axisLine={false}
                  tickLine={false}
                  unit={current.unit}
                />
                <YAxis 
                  dataKey="category" 
                  type="category"
                  stroke="#475569" 
                  fontSize={10} 
                  fontWeight={800}
                  axisLine={false}
                  tickLine={false}
                  width={100}
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ 
                    borderRadius: '20px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    padding: '20px'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend 
                  verticalAlign="top" 
                  align="right" 
                  iconType="circle" 
                  wrapperStyle={{ paddingBottom: '30px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}
                />
                <Bar dataKey="male" name="Male" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="female" name="Female" fill="#ec4899" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Education Insight
            </h4>
            <p className="text-slate-700 font-medium leading-relaxed">
              Based on SY 2022-2023 data, female students consistently show higher completion rates in both Elementary (99.8%) and Secondary levels (84.8%) compared to their male counterparts.
            </p>
         </div>
         <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-pink-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Workforce Insight
            </h4>
            <p className="text-slate-700 font-medium leading-relaxed">
              Despite higher educational attainment, there is a significant gap in Labor Force Participation Rate (LFPR), with females at 51.2% versus males at 75.4%.
            </p>
         </div>
      </div>
    </div>
  );
};

export default StatChart;
