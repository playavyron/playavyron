"use client";

import { motion } from "framer-motion";

export default function CreatePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Contenido */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          CREATE GAMES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Describe your dream game and let artificial intelligence
          bring it to life.
        </motion.p>

        {/* Caja IA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <textarea
            placeholder="I want a dragon game in space with lasers and magic..."
            className="h-40 w-full rounded-2xl border border-white/10 bg-black/40 p-6 text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <button className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-10 py-5 text-2xl font-bold text-white shadow-[0_0_40px_rgba(0,255,255,0.7)] transition hover:scale-105">
            Generate Game
          </button>

        </motion.div>

      </section>

    </main>
  );
}