"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo galaxia */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow cyan */}
      <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Glow purple */}
      <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-pulse"
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
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-8 py-6 backdrop-blur-md">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-3xl font-black tracking-[0.3em] text-transparent"
        >
          AVYRON
        </motion.h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">

          <button className="transition hover:text-cyan-400">
            Inicio
          </button>

          <button className="transition hover:text-cyan-400">
            Juegos
          </button>

          <button className="transition hover:text-cyan-400">
            IA
          </button>

          <button className="transition hover:text-cyan-400">
            Universo
          </button>

        </div>

      </nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >

        {/* Logo animado */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400 bg-black/30 text-8xl text-cyan-300 shadow-[0_0_70px_rgba(0,255,255,0.8)] backdrop-blur-xl"
        >
          A
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-7xl font-black tracking-[0.25em] text-transparent md:text-9xl"
        >
          AVYRON
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 text-xl uppercase tracking-[0.5em] text-cyan-100 md:text-2xl"
        >
          Imagine. Create. Play.
        </motion.p>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          A futuristic universe where artificial intelligence,
          gaming and creativity merge into one immersive experience
          for the next generation of creators.
        </motion.p>

        {/* Botones */}
        <div className="mt-14 flex flex-col gap-6 md:flex-row">

          <Link href="/universo">

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 40px rgba(0,255,255,0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-12 py-5 text-2xl font-bold text-white"
            >
              Enter Universe
            </motion.button>

          </Link>

          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: "#22d3ee",
            }}
            className="rounded-full border border-white/20 bg-white/5 px-12 py-5 text-xl text-cyan-100 backdrop-blur-md"
          >
            Explore Games
          </motion.button>

        </div>

        {/* Cards */}
        <div className="mt-28 grid w-full max-w-6xl gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-cyan-300">
              AI Game Creation
            </h3>

            <p className="mt-4 text-zinc-400">
              Kids can create their own games using the power of artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-fuchsia-300">
              Creative Worlds
            </h3>

            <p className="mt-4 text-zinc-400">
              Explore infinite worlds full of imagination, stories and adventures.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-blue-300">
              Learn While Playing
            </h3>

            <p className="mt-4 text-zinc-400">
              Fun experiences designed to teach creativity, logic and innovation.
            </p>
          </motion.div>

        </div>

      </motion.section>

    </main>
  );
}
