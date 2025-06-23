const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const { message, emotion } = req.body;

    if (!message || !emotion) {
      return res.status(400).json({ success: false, error: "Message or emotion missing" });
    }

    const prompt = `Enhance the following sentence in a ${emotion.toLowerCase()} tone: "${message}"`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100,
        temperature: 0.8,
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0].message) {
      return res.status(500).json({ success: false, error: "No valid response from OpenAI" });
    }

    const enhancedMessage = data.choices[0].message.content.trim();

    res.status(200).json({ success: true, enhanced: enhancedMessage });
  } catch (err) {
    console.error("API ERROR:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
