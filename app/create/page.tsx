"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Game = {
  title: string;
  genre: string;
  rarity: string;
  difficulty: string;
  story: string;
  gameplay: string;
  powers: string;
  enemies: string;
  world: string;
};

function fallbackGame(prompt: string): Game {
  return {
    title: "AVYRON QUEST",
    genre: "AI Adventure",
    rarity: "Epic",
    difficulty: "Medium",
    story: `Una aventura futurista creada a partir de tu idea: ${prompt}`,
    gameplay: "Exploración, misiones, combates y creación de mundos.",
    powers: "Portales mágicos, energía cósmica y habilidades desbloqueables.",
    enemies: "Criaturas oscuras, robots y guardianes del universo.",
    world: "Islas flotantes, templos neón y galaxias misteriosas.",
  };
}

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [game, setGame] = useState<Game | null>(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateGame() {
    if (!prompt.trim()) return;

    setLoading(true);
    setImage("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.concept) {
        setGame(data.concept);
        setImage(data.image || "");
      } else {
        setGame(fallbackGame(prompt));
      }
    } catch {
      setGame(fallbackGame(prompt));
    }

    setLoading(false);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />
      <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-250px] right-[-250px] h-[600px] w-[600px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      <section className="relative z-10 flex flex-col items-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          CREAR JUEGOS
        </motion.h1>

        <p className="mt-8 max-w-3xl text-xl text-zinc-400">
          Describe tu juego y AVYRON creará un concepto con portada.
        </p>

        <div className="mt-16 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ejemplo: dragones, piratas, magia y vuelo..."
            className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-6 text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <button
            onClick={generateGame}
            className="mt-8 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-10 py-5 text-2xl font-bold transition hover:scale-105"
          >
            {loading ? "Generando..." : "Generar juego"}
          </button>
        </div>

        {game && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 w-full max-w-5xl rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-2xl"
          >
            {image ? (
              <img
                src={image}
                alt="Portada del juego"
                className="mx-auto mb-10 w-full max-w-xl rounded-3xl border border-cyan-500/30 shadow-2xl"
              />
            ) : (
              <div className="mx-auto mb-10 flex h-80 w-full max-w-xl items-center justify-center rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-fuchsia-500/30 text-7xl">
                🎮
              </div>
            )}

            <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-center text-sm uppercase tracking-[0.2em] text-cyan-300">
              Juego generado por AVYRON
            </div>

            <h2 className="mt-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-center text-5xl font-black text-transparent">
              {game.title}
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="rounded-full border border-cyan-400/30 px-5 py-2 text-cyan-300">
                🎮 {game.genre}
              </span>
              <span className="rounded-full border border-fuchsia-400/30 px-5 py-2 text-fuchsia-300">
                ✨ {game.rarity}
              </span>
              <span className="rounded-full border border-blue-400/30 px-5 py-2 text-blue-300">
                ⚔️ {game.difficulty}
              </span>
            </div>

            <p className="mt-8 text-center text-lg leading-8 text-zinc-300">
              {game.story}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                ["Gameplay", game.gameplay, "text-cyan-300"],
                ["Poderes", game.powers, "text-fuchsia-300"],
                ["Enemigos", game.enemies, "text-blue-300"],
                ["Mundo", game.world, "text-cyan-200"],
              ].map(([title, text, color]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6"
                >
                  <h3 className={`text-2xl font-bold ${color}`}>{title}</h3>
                  <p className="mt-4 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}