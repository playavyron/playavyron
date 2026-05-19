"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Universo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow cyan */}
      <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Glow purple */}
      <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-8 py-6 backdrop-blur-xl">

        <Link href="/">

          <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-3xl font-black tracking-[0.3em] text-transparent cursor-pointer">
            AVYRON
          </h1>

        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">

          <button className="hover:text-cyan-400 transition">
            Games
          </button>

          <button className="hover:text-cyan-400 transition">
            AI
          </button>

          <button className="hover:text-cyan-400 transition">
            Worlds
          </button>

          <button className="hover:text-cyan-400 transition">
            Community
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-28 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          THE UNIVERSE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Explore worlds powered by imagination, gaming and artificial intelligence.
        </motion.p>

        {/* GRID */}
        <div className="mt-24 grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">🎮</div>

            <h2 className="text-3xl font-bold text-cyan-300">
              Create Games
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Build amazing games with the power of artificial intelligence.
            </p>

            <button className="mt-8 rounded-full bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400">
              Enter
            </button>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-fuchsia-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">🤖</div>

            <h2 className="text-3xl font-bold text-fuchsia-300">
              AI Companion
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Talk with your intelligent assistant and create adventures together.
            </p>

            <button className="mt-8 rounded-full bg-fuchsia-500 px-6 py-3 font-bold text-white transition hover:bg-fuchsia-400">
              Enter
            </button>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">🌎</div>

            <h2 className="text-3xl font-bold text-blue-300">
              Worlds
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Explore infinite universes created by kids around the world.
            </p>

            <button className="mt-8 rounded-full bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-400">
              Enter
            </button>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">🧠</div>

            <h2 className="text-3xl font-bold text-yellow-300">
              Learn Lab
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Learn creativity, logic and coding through interactive experiences.
            </p>

            <button className="mt-8 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300">
              Enter
            </button>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-green-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">👾</div>

            <h2 className="text-3xl font-bold text-green-300">
              Kids Zone
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Safe and magical experiences designed for younger creators.
            </p>

            <button className="mt-8 rounded-full bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400">
              Enter
            </button>
          </motion.div>

          {/* Card */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 text-6xl">🚀</div>

            <h2 className="text-3xl font-bold text-orange-300">
              Creator Hub
            </h2>

            <p className="mt-6 text-zinc-400 leading-7">
              Share games, collaborate and become part of the Avyron universe.
            </p>

            <button className="mt-8 rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400">
              Enter
            </button>
          </motion.div>

        </div>

      </section>

    </main>
  );
}
