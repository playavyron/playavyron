import Image from "next/image";
import Link from "next/link";

const cards = [
  { icon: "🎮", title: "Crear juegos", text: "Crea juegos increíbles con el poder de la inteligencia artificial.", color: "#00e5ff", link: "/create" },
  { icon: "🤖", title: "Compañero de IA", text: "Habla con tu asistente inteligente y creemos aventuras juntos.", color: "#ff00ff", link: "/ai" },
  { icon: "🌍", title: "Mundos", text: "Explora universos infinitos creados por niños de todo el mundo.", color: "#2979ff", link: "/universo" },
  { icon: "🧠", title: "Laboratorio de aprendizaje", text: "Aprende creatividad, lógica y programación a través de proyectos interactivos.", color: "#ffe600", link: "/kids" },
  { icon: "👾", title: "Zona infantil", text: "Experiencias seguras y mágicas diseñadas para jóvenes creadores.", color: "#00ff99", link: "/kids" },
  { icon: "🚀", title: "Centro de creadores", text: "Comparte juegos, colabora y forma parte del universo de Avyron.", color: "#ff7b00", link: "/create" },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.85)), url('/bg-space.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <nav
        style={{
          width: "90%",
          margin: "22px auto",
          padding: "12px 22px",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,.15)",
          background: "rgba(0,0,0,.55)",
          backdropFilter: "blur(18px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 0 25px rgba(255,0,255,.18)",
        }}
      >
        <Image
          src="/logo.png"
          alt="AVYRON"
          width={120}
          height={55}
          style={{ objectFit: "contain", height: "auto" }}
        />

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          <span style={{ color: "#00e5ff" }}>Inicio</span>
          <span>Cursos</span>
          <span>IA</span>
          <span>Comunidad</span>

          <button
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              border: "1px solid #ff00ff",
              background: "transparent",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 0 18px rgba(255,0,255,.4)",
            }}
          >
            Ingresar
          </button>
        </div>
      </nav>

      <section
        style={{
          textAlign: "center",
          width: "90%",
          margin: "0 auto",
          paddingTop: "8px",
        }}
      >
        <Image
          src="/logo.png"
          alt="AVYRON"
          width={260}
          height={120}
          style={{
            margin: "0 auto",
            objectFit: "contain",
            height: "auto",
          }}
        />

        <h1
          style={{
            fontSize: "40px",
            fontWeight: "900",
            lineHeight: 1.05,
            marginTop: "18px",
            background: "linear-gradient(90deg,#ffffff,#00e5ff,#d46cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          El futuro del
          <br />
          aprendizaje interactivo
        </h1>

        <p
          style={{
            maxWidth: "660px",
            margin: "18px auto",
            fontSize: "16px",
            lineHeight: 1.5,
            color: "#f1f5f9",
          }}
        >
          Inteligencia artificial, gamificación y experiencias inmersivas
          combinadas en una plataforma diseñada para aprender creando.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            marginTop: "22px",
            flexWrap: "wrap",
          }}
        >
       <Link
  href="/create"
  style={{
    display: "inline-block",
    marginTop: "16px",
    padding: "10px 24px",
    borderRadius: "999px",
    border: "1px solid #00d9ff",
    background: "transparent",
    color: "#00d9ff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 0 14px rgba(0,217,255,.4)",
    textDecoration: "none",
  }}
>
  Ingresar →
</Link>

          <button
            style={{
              padding: "12px 32px",
              borderRadius: "999px",
              border: "1px solid #ff00ff",
              background: "transparent",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 0 18px rgba(255,0,255,.25)",
            }}
          >
            Ver demo ▷
          </button>
        </div>
      </section>

      <section
        style={{
          width: "90%",
          margin: "42px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              minHeight: "220px",
              background: "rgba(0,0,0,.68)",
              border: `1px solid ${card.color}`,
              borderRadius: "24px",
              padding: "20px 18px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              boxShadow: `0 0 25px ${card.color}33`,
            }}
          >
            <div style={{ fontSize: "38px" }}>{card.icon}</div>

            <h2
              style={{
                fontSize: "1.5rem",
                marginTop: "12px",
                color: card.color,
                fontWeight: "900",
                lineHeight: 1.1,
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                marginTop: "12px",
                fontSize: "15px",
                lineHeight: 1.45,
                color: "#f8fafc",
              }}
            >
              {card.text}
            </p>

            <button
              style={{
                marginTop: "16px",
                padding: "10px 24px",
                borderRadius: "999px",
                border: `1px solid ${card.color}`,
                background: "transparent",
                color: card.color,
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: `0 0 14px ${card.color}44`,
              }}
            >
              Ingresar →
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}