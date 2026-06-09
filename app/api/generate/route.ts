export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json(
        { error: "Falta el prompt." },
        { status: 400 }
      );
    }

    const game = {
      title: `Aventura: ${prompt}`,
      concept:
        "Un juego interactivo creado por Avyron donde el jugador aprende creando, explorando y resolviendo desafíos.",
      image: null,
    };

    return Response.json(game);
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      { error: "No se pudo generar el juego." },
      { status: 500 }
    );
  }
}