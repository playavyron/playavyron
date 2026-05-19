"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CreatePage() {

  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);

  function generateGame() {

    if (!prompt) return;

    setGenerated(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow */}
      <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-24 text-center">

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          CREATE GAMES
        </motion.h1>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
        >
          Describe your dream game and let AVYRON create it.
        </motion.p>

        {/* Caja */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A dragon game in space with magic powers..."
            className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-6 text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateGame}
            className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-10 py-5 text-2xl font-bold shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            Generate Game
          </motion.button>

        </motion.div>

        {/* Resultado */}
        {generated && (

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-20 w-full max-w-5xl rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-2xl"
          >

            <div className="flex flex-col items-start text-left">

              <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                AI GENERATED GAME
              </div>

              <h2 className="mt-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-5xl font-black text-transparent">
                DRAGONVERSE X
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                Explore a futuristic galaxy where dragons control ancient cosmic magic.
                Fight space pirates, unlock elemental powers and build your own kingdom among the stars.
              </p>

              {/* Grid */}
              <div className="mt-12 grid w-full gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-cyan-300">
                    Gameplay
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Open-world exploration, boss fights, magic combat and cooperative missions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-fuchsia-300">
                    Powers
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Fire storms, cosmic portals, gravity wings and energy swords.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-blue-300">
                    Enemies
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Alien hunters, corrupted dragons and robotic armies.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-cyan-200">
                    World
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Floating cities, crystal planets and intergalactic temples.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        )}

      </section>

    </main>
  );
}