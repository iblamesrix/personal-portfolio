import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const LiveSimulator: React.FC = () => {
  const [activeEndpointIndex, setActiveEndpointIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<Record<string, unknown> | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const endpoints = [
    {
      name: "SmartSoilAI ML Inference",
      method: "POST",
      url: "/api/v1/ml/smartsoil/predict",
      payload: { nitrogen: 84.5, phosphorus: 42.0, potassium: 38.2, ph_level: 6.8, rainfall_mm: 180.4 },
      simulatedResponse: {
        status: "success", http_code: 200, model_version: "SmartSoil-v2.4-rf",
        overall_accuracy: "88.4%", predicted_crop: "Rice / Cotton",
        recommended_fertilizer: "NPK 14-35-14 (45kg/acre)", confidence_score: 0.942,
        telemetry: { feature_scaling_ms: 2.1, model_inference_ms: 14.8, db_lookup_ms: 8.3 }
      }
    },
    {
      name: "AeroVision CNN Detection",
      method: "POST",
      url: "/api/v1/vision/aerovision/detect",
      payload: { image_id: "aerial_frame_8849.png", resolution: "1920x1080", min_confidence: 0.80 },
      simulatedResponse: {
        status: "success", http_code: 200, cnn_architecture: "ResNet50-Custom-Aero",
        detections_found: 3, overall_accuracy: "85.2%",
        bounding_boxes: [{ label: "Structure", confidence: 0.96 }, { label: "Vehicle", confidence: 0.89 }],
        inference_fps: 34.2
      }
    },
    {
      name: "LitWear Catalog Search",
      method: "GET",
      url: "/api/v1/catalog/products/search?q=jacket",
      payload: { query: "jacket", category: "outerwear", sort: "popularity" },
      simulatedResponse: {
        status: "success", http_code: 200, cache_hit: true,
        query_optimization_gain: "35% faster", total_products: 14,
        products: [
          { id: "LW-109", title: "Tech-Fleece Obsidian Jacket", price: "$129.00" },
          { id: "LW-204", title: "Minimalist Urban Anorak", price: "$159.00" }
        ]
      }
    }
  ];

  const current = endpoints[activeEndpointIndex];

  const handleRun = () => {
    setIsRunning(true);
    setExecutionOutput(null);
    const start = performance.now();
    setTimeout(() => {
      setExecutionTime(Math.round(performance.now() - start + Math.random() * 15 + 10));
      setExecutionOutput(current.simulatedResponse);
      setIsRunning(false);
    }, 400);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden">
      <div className="orb w-80 h-80 bg-emerald-500 top-1/2 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/20 text-xs font-mono font-bold text-emerald-300 mb-4">
            <Terminal className="size-3.5" />
            LIVE INTERACTIVE DEMO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend API & <span className="neon-text">ML Inference Simulator</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Test live simulated microservice requests against Srikanth B's backend architectures.
          </p>
        </motion.div>

        {/* Terminal */}
        <div className="glass gradient-border rounded-2xl overflow-hidden shadow-glow">

          {/* Top bar */}
          <div className="px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/70" />
                <div className="size-3 rounded-full bg-yellow-500/70" />
                <div className="size-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs font-mono text-slate-500 border-l border-white/5 pl-3">srikanth-architecture-v1.4.0</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE
            </span>
          </div>

          {/* Endpoint tabs */}
          <div className="p-4 border-b border-white/5 flex flex-wrap gap-2">
            {endpoints.map((ep, idx) => (
              <button key={idx}
                onClick={() => { setActiveEndpointIndex(idx); setExecutionOutput(null); setExecutionTime(null); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeEndpointIndex === idx
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'glass text-slate-400 border border-white/5 hover:text-white hover:border-violet-500/20'
                }`}
              >
                <span className={`font-bold mr-1.5 ${ep.method === 'POST' ? 'text-amber-400' : 'text-emerald-400'}`}>[{ep.method}]</span>
                {ep.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Workspace */}
          <div className="p-6 grid lg:grid-cols-12 gap-6 items-start">

            {/* Request */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>ENDPOINT ROUTE</span>
                  <span className={`font-bold ${current.method === 'POST' ? 'text-amber-400' : 'text-emerald-400'}`}>{current.method}</span>
                </div>
                <div className="p-3 bg-gray-950 rounded-xl border border-white/5 text-xs font-mono text-violet-300">{current.url}</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 mb-2">REQUEST PAYLOAD (JSON)</div>
                <div className="bg-gray-950 p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{JSON.stringify(current.payload, null, 2)}</pre>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRun}
                disabled={isRunning}
                className="w-full btn-gradient flex items-center justify-center gap-2 py-3 rounded-xl text-white font-mono font-bold text-xs shadow-glow disabled:opacity-50"
              >
                {isRunning ? (
                  <><RefreshCw className="size-4 animate-spin" /><span>Executing...</span></>
                ) : (
                  <><Play className="size-4 fill-white" /><span>Execute API Query</span></>
                )}
              </motion.button>
            </div>

            {/* Response */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>SERVER RESPONSE & TELEMETRY</span>
                {executionTime !== null && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Zap className="size-3.5" /> {executionTime}ms
                  </span>
                )}
              </div>
              <div className="bg-gray-950 p-4 rounded-xl border border-white/5 min-h-[260px] font-mono text-xs overflow-x-auto flex flex-col justify-between">
                {isRunning ? (
                  <div className="flex flex-col items-center justify-center py-12 text-slate-500 gap-2">
                    <RefreshCw className="size-6 animate-spin text-violet-400" />
                    <span>Processing backend pipeline...</span>
                  </div>
                ) : executionOutput ? (
                  <div>
                    <div className="text-slate-600 text-[10px] pb-2 mb-2 border-b border-white/5 flex justify-between">
                      <span className="text-emerald-400">HTTP 200 OK</span>
                      <span>Content-Type: application/json</span>
                    </div>
                    <pre className="text-emerald-300">{JSON.stringify(executionOutput, null, 2)}</pre>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-slate-600 gap-2 text-center">
                    <Code2 className="size-8 text-slate-700" />
                    <span>Click "Execute API Query" to test request telemetry</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
