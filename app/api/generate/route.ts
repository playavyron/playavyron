import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json(
        { error: "Falta el prompt." },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Sos AVYRON, una IA que crea ideas de videojuegos educativos para niños. Respondé siempre en JSON válido, sin markdown.",
        },
        {
          role: "user",
          content: `
Crea un videojuego educativo para niños basado en esta idea:

"${prompt}"

Respondé SOLO con este JSON:

{
  "title": "Nombre del juego",
  "concept": "Resumen corto del juego",
  "gameplay": "Cómo se juega",
  "powers": "Poderes o habilidades principales",
  "enemies": "Obstáculos o enemigos",
  "world": "Descripción del mundo",
  "image": null
}
`,
        },
      ],
      temperature: 0.8,
    });

    const text = completion.choices[0]?.message?.content || "{}";
    const game = JSON.parse(text);

    return Response.json(game);
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    return Response.json(
      { error: "No se pudo generar el juego." },
      { status: 500 }
    );
  }
}
