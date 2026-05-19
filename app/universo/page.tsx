"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Crear Juegos",
    description:
      "Crea increíbles juegos con inteligencia artificial a partir de tu imaginación.",
    icon: "🎮",
    href: "/create",
    glow: "from-cyan-500 to-blue-500",
  },
  {
    title: "Compañero de IA",
    description:
      "Habla con asistentes inteligentes y crea aventuras.",
    icon: "🤖",
    href: "/ai",
    glow: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Mundos",
    description:
      "Explora universos mágicos creados por jugadores.",
    icon: "🌌",
    href: "/worlds",
    glow: "from-violet-500 to-indigo-500",
  },
  {
    title: "Kids Zone",
    description:
      "Experiencias seguras y creativas para jóvenes exploradores.",
    icon: "✨",
    href: "/kids",
    glow: "from-cyan-400 to-fuchsia-400",
  },
];

export default function Universo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-fuchsia-950" />

      {/* Glow */}
      <div className="absolute top-[-250px] left-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-3xl" />

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

          <h1 className="cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-3xl font-black tracking-[0.3em] text-transparent">
            AVYRON
          </h1>

        </Link>

        <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300 md:flex">

          <button className="transition hover:text-cyan-400">
            Juegos
          </button>

          <button className="transition hover:text-cyan-400">
            AI
          </button>

          <button className="transition hover:text-cyan-400">
            Mundos
          </button>

          <button className="transition hover:text-cyan-400">
            Comunidad
          </button>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-28 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-6xl font-black tracking-[0.2em] text-transparent md:text-8xl"
        >
          EL UNIVERSO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
        >
          Explora el universo de juegos con IA de próxima generación diseñado
          para creadores, soñadores e innovadores del futuro.
        </motion.p>

        {/* Grid */}
        <div className="mt-24 grid w-full max-w-7xl gap-8 md:grid-cols-2">

          {cards.map((card, index) => (

            <Link key={index} href={card.href}>

              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateX: 4,
                  rotateY: 4,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_60px_rgba(0,255,255,0.15)]"
              >

                {/* Glow interno */}
                <div
                  className={`absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-20 bg-gradient-to-br ${card.glow}`}
                />

                {/* Línea brillante */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Icono */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-7xl"
                  >
                    {card.icon}
                  </motion.div>

                  {/* Título */}
                  <h2 className="mt-8 text-4xl font-black text-white">
                    {card.title}
                  </h2>

                  {/* Texto */}
                  <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
                    {card.description}
                  </p>

                  {/* Botón */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-10 rounded-full bg-gradient-to-r ${card.glow} px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
                  >
                    Entrar
                  </motion.button>

                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
