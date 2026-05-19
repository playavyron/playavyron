"use client";

import { motion } from "framer-motion";

export default function KidsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#12002b] text-white">

      {/* Fondo mágico */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-900 to-cyan-500/20" />

      {/* Glow */}
      <div className="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-pink-400/30 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-400/30 blur-3xl" />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Emoji */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-8xl"
        >
          🌈
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-gradient-to-r from-pink-300 via-cyan-300 to-yellow-300 bg-clip-text text-6xl font-black text-transparent md:text-8xl"
        >
          KIDS ZONE
        </motion.h1>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-2xl text-xl leading-8 text-pink-100"
        >
          Magical adventures, creative games and safe worlds
          designed for young creators.
        </motion.p>

        {/* Botones */}
        <div className="mt-16 flex flex-col gap-6 md:flex-row">

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-pink-400 px-10 py-5 text-2xl font-bold text-black shadow-[0_0_30px_rgba(255,105,180,0.8)]"
          >
            Play Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-cyan-400 px-10 py-5 text-2xl font-bold text-black shadow-[0_0_30px_rgba(0,255,255,0.8)]"
          >
            Explore Worlds
          </motion.button>

        </div>

        {/* Cards */}
        <div className="mt-24 grid w-full max-w-6xl gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl"
          >
            <div className="text-6xl">🦄</div>

            <h3 className="mt-6 text-3xl font-bold text-pink-200">
              Fantasy Worlds
            </h3>

            <p className="mt-4 text-pink-100">
              Discover magical places full of adventure and imagination.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl"
          >
            <div className="text-6xl">🎨</div>

            <h3 className="mt-6 text-3xl font-bold text-cyan-200">
              Creative Games
            </h3>

            <p className="mt-4 text-cyan-100">
              Create colorful games and stories with easy tools.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl"
          >
            <div className="text-6xl">🚀</div>

            <h3 className="mt-6 text-3xl font-bold text-yellow-200">
              Space Adventures
            </h3>

            <p className="mt-4 text-yellow-100">
              Travel through galaxies and discover amazing missions.
            </p>
          </motion.div>

        </div>

      </section>

    </main>
  );
}
