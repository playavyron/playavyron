"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AIPage() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateUniverse() {

    if (!prompt) return;

    setLoading(true);

    try {

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      setResponse(data.result);

    } catch (error) {

      setResponse("Error generating universe.");

    }

    setLoading(false);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-8xl"
        >
          🤖
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          AI CORE
        </motion.h1>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
        >
          Create worlds, games and futuristic adventures with AI.
        </motion.p>

        {/* Caja */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your dream game..."
            className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-6 text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateUniverse}
            className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-10 py-5 text-xl font-bold shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            {loading ? "Generating..." : "Generate Universe"}
          </motion.button>

          {/* Resultado */}
          {response && (

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6 text-left text-zinc-300 whitespace-pre-wrap">
              {response}
            </div>

          )}

        </motion.div>

      </section>

    </main>
  );
}