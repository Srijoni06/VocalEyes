export default async function handler(req, res) {
  const { message, emotion } = req.body;

  const prompt = `Enhance the following sentence in a ${emotion.toLowerCase()} tone: "${message}"`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  const enhanced = data.choices?.[0]?.message?.content;

  res.status(200).json({ enhanced });
}
