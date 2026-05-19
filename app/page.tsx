export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Fondo Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-fuchsia-900/30" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">

        <h1 className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
          AVYRON
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-300">
          <button className="hover:text-cyan-400 transition">
            Inicio
          </button>

          <button className="hover:text-cyan-400 transition">
            Juegos
          </button>

          <button className="hover:text-cyan-400 transition">
            IA
          </button>

          <button className="hover:text-cyan-400 transition">
            Universo
          </button>
        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32 px-6">

        {/* Logo */}
        <div className="w-36 h-36 rounded-full border border-cyan-400 flex items-center justify-center text-6xl text-cyan-300 shadow-[0_0_60px_rgba(0,255,255,0.6)] mb-10">
          A
        </div>

        {/* Título */}
        <h1 className="text-7xl md:text-9xl font-black tracking-[0.25em] uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
          AVYRON
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-cyan-100 text-xl md:text-2xl tracking-[0.5em] uppercase">
          Imagine. Create. Play.
        </p>

        {/* Descripción */}
        <p className="mt-10 max-w-2xl text-zinc-400 text-lg leading-8">
          A futuristic universe where artificial intelligence,
          gaming and creativity merge into one experience.
        </p>

        {/* Botones */}
        <div className="flex gap-6 mt-12">

          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-xl font-bold shadow-[0_0_35px_rgba(0,255,255,0.6)] hover:scale-105 transition">
            Enter Universe
          </button>

          <button className="px-10 py-5 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition">
            Explore Games
          </button>

        </div>

      </section>

    </main>
  );
}
