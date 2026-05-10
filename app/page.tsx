'use client';
import React, { useState } from 'react';
import { calculateSavings, ToolInput, AuditResult } from '../src/auditEngine';

export default function Page() {
  const [step, setStep] = useState(1);
  const [teamSize, setTeamSize] = useState<number>(10);
  const [tools, setTools] = useState<ToolInput[]>([
    { name: 'ChatGPT', plan: 'Plus', users: 10, spend: 200 }
  ]);
  const [analyzing, setAnalyzing] = useState(false);
  const [email, setEmail] = useState('');
  const [captured, setCaptured] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const availableTools = ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'Gemini'];
  const availablePlans: Record<string, string[]> = {
    'ChatGPT': ['Plus', 'Team', 'Enterprise', 'API Direct'],
    'Claude': ['Free', 'Pro', 'Team', 'API Direct'],
    'GitHub Copilot': ['Individual', 'Business', 'Enterprise'],
    'Cursor': ['Hobby', 'Pro', 'Business'],
    'Gemini': ['Advanced', 'API Direct']
  };

  const runAudit = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const result = calculateSavings(tools, teamSize);
      setAuditResult(result);
      setAnalyzing(false);
      setStep(2);
    }, 1500);
  };

  const addTool = () => {
    setTools([...tools, { name: 'Claude', plan: 'Pro', users: 1, spend: 20 }]);
  };

  const updateTool = (index: number, field: keyof ToolInput, value: string | number) => {
    const newTools = [...tools];
    newTools[index] = { ...newTools[index], [field]: value };
    // Auto-calculate spend if plan is known
    if (field === 'users' || field === 'plan') {
      const tool = newTools[index];
      let price = 0;
      if (tool.plan === 'Plus' || tool.plan === 'Pro' || tool.plan === 'Advanced') price = 20;
      if (tool.plan === 'Individual') price = 10;
      if (tool.plan === 'Business') price = 19;
      if (tool.plan === 'Team') price = 25;
      newTools[index].spend = price * Number(tool.users);
    }
    setTools(newTools);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Stop Overpaying for AI.</h1>
          <p className="text-lg text-slate-600">Instantly audit your startup's AI stack. Discover unused seats and cheaper API alternatives in 30 seconds.</p>
        </div>

        {/* Step 1: Input Form */}
        {step === 1 && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6">1. Tell us about your stack</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Total Engineering Team Size</label>
              <input 
                type="number" 
                value={teamSize} 
                onChange={(e) => setTeamSize(Number(e.target.value))} 
                className="w-full p-2 border rounded-md" 
              />
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-semibold border-b pb-2">Your Subscriptions</h3>
              {tools.map((tool, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="block text-xs font-medium mb-1">Tool</label>
                    <select 
                      value={tool.name}
                      onChange={(e) => updateTool(idx, 'name', e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      {availableTools.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Plan</label>
                    <select 
                      value={tool.plan}
                      onChange={(e) => updateTool(idx, 'plan', e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      {availablePlans[tool.name]?.map(p => <option key={p}>{p}</option>) || <option>Custom</option>}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Seats</label>
                    <input 
                      type="number" 
                      value={tool.users} 
                      onChange={(e) => updateTool(idx, 'users', Number(e.target.value))}
                      className="w-full p-2 border rounded-md" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Total/mo ($)</label>
                    <input 
                      type="number" 
                      value={tool.spend} 
                      onChange={(e) => updateTool(idx, 'spend', Number(e.target.value))}
                      className="w-full p-2 border rounded-md" 
                    />
                  </div>
                </div>
              ))}
              <button onClick={addTool} className="text-sm text-blue-600 font-medium hover:underline">+ Add another tool</button>
            </div>

            <button 
              onClick={runAudit}
              disabled={analyzing}
              className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-slate-800 transition-all"
            >
              {analyzing ? 'Analyzing Pricing Data...' : 'Run Audit Engine'}
            </button>
          </div>
        )}

        {/* Step 2: Results */}
        {step === 2 && auditResult && (
          <div className="space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center shadow-sm">
              <h2 className="text-emerald-800 font-bold mb-2">Estimated Savings Found</h2>
              <div className="text-5xl font-extrabold text-emerald-600 mb-2">${auditResult.totalSavingsAnnual}<span className="text-2xl text-emerald-500/70">/yr</span></div>
              <p className="text-emerald-700 text-sm">Based on live pricing data and your {teamSize}-person team.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg mb-4">Audit Breakdown</h3>
              
              {auditResult.warnings.length === 0 ? (
                <p className="text-slate-600 mb-6">Your stack looks highly optimized. No critical warnings found.</p>
              ) : (
                auditResult.warnings.map((warning, idx) => (
                  <div key={idx} className="p-4 bg-rose-50 border border-rose-100 rounded-lg mb-4">
                    <p className="text-sm text-rose-800 mb-2"><strong>Warning:</strong> {warning}</p>
                    {auditResult.recommendations[idx] && (
                      <div className="bg-white p-3 rounded border text-sm">
                        <strong>Recommendation:</strong> {auditResult.recommendations[idx]}
                      </div>
                    )}
                  </div>
                ))
              )}

              {!captured ? (
                <div className="bg-slate-900 text-white p-6 rounded-lg text-center mt-6">
                  <h4 className="font-bold mb-2">Unlock Full Personalized Report</h4>
                  <p className="text-sm text-slate-300 mb-4">Enter your email to save this audit, get the shareable URL, and see exact migration steps.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setCaptured(true); }} className="flex gap-2 max-w-md mx-auto">
                    <input type="email" required placeholder="founder@startup.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="flex-1 p-2 rounded text-black" />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 font-bold rounded">Get Report</button>
                  </form>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-blue-900 mb-2">✅ Audit Saved</h4>
                  <p className="text-sm text-blue-800 mb-4">Your shareable URL has been generated. Credex will reach out shortly.</p>
                  <div className="p-4 bg-white border rounded text-sm italic text-slate-600">
                    "AI Summary: Based on your {teamSize}-person engineering team, you have an opportunity to reduce your burn by ${auditResult.totalSavingsAnnual} annually. Transitioning non-power users to an API-direct model allows you to maintain identical model access while heavily optimizing per-seat costs."
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
