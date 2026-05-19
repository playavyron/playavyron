import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Fondo Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-fuchsia-900/30" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">
        
        <h1 className="text-2xl font-bold tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
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

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32 px-6">

        {/* Logo */}
        <div className="w-36 h-36 rounded-full border border-cyan-400 flex items-center justify-center text-7xl text-cyan-300 shadow-[0_0_50px_rgba(0,255,255,0.8)]">
          A
        </div>

        {/* Título */}
        <h1 className="mt-16 text-7xl md:text-9xl font-black tracking-[0.25em] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,255,0.6)]">
          AVYRON
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-cyan-100 text-xl md:text-2xl tracking-[0.5em] uppercase">
          Imagina. Crea. Juega.
        </p>

        {/* Botón */}
        <Link href="/universo">
          <button className="mt-14 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white text-2xl font-bold shadow-[0_0_35px_rgba(0,255,255,0.8)] hover:scale-110 transition duration-300">
            Enter Universe
          </button>
        </Link>

      </section>

    </main>
  );
}