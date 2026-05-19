import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const prompt = body.prompt;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an AI game creator for children. Create imaginative game ideas with characters, gameplay, powers, enemies and worlds.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = completion.choices[0].message.content;

    return Response.json({
      result,
    });

  } catch (error) {

    return Response.json({
      result: "Something went wrong.",
    });

  }

}