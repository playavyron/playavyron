export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Fondo galaxia */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020412] via-black to-[#120224]" />

      {/* Glow azul */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />

      {/* Glow violeta */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Estrellas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-pulse"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-10 relative">
          <div className="w-32 h-32 rounded-full border border-cyan-400 flex items-center justify-center shadow-[0_0_80px_#00ffff] bg-black/40 backdrop-blur-xl">
            <span className="text-6xl text-cyan-300 font-light tracking-widest">
              A
            </span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-8xl md:text-[10rem] font-black tracking-[0.25em] uppercase bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,255,255,0.9)]">
          AVYRON
        </h1>

        {/* Subtítulo */}
        <p className="mt-8 text-cyan-100 text-xl md:text-2xl tracking-[0.5em] uppercase">
          Imagine. Create. Play.
        </p>

        {/* Botón */}
        <button className="mt-14 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xl font-bold shadow-[0_0_40px_rgba(0,255,255,0.8)] hover:scale-110 hover:shadow-[0_0_60px_rgba(168,85,247,1)] transition-all duration-500">
          Enter Universe
        </button>

      </div>
    </main>
  );
}