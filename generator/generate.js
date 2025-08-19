import fs from "fs";
import fetch from "node-fetch";

const API_KEY = process.env.OPENROUTER_API_KEY;
const topics = fs.readFileSync("topics.txt", "utf8")
  .split("\n")
  .map(x => x.trim())
  .filter(Boolean);

// Weź 5 pierwszych tematów (można rotacyjnie zmieniać w kolejnych runach)
const batch = topics.slice(0, 5);

async function generateContent(topic) {
  const prompt = `
  Przygotuj materiały dla: "${topic}".
  1. Quiz (5 pytań ABCD).
  2. 5 fiszek.
  3. Krótkie notatki (max 250 słów).
  Format: Markdown.
  `;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo", 
      messages: [{ role: "user", content: prompt }]
    }),
  });

  const data = await response.json();
  const text = data.choices[0].message.content;

  if (!fs.existsSync("content")) fs.mkdirSync("content");
  fs.writeFileSync(`content/${topic.replace(/\s+/g, "_")}.md`, text);

  console.log("Wygenerowano:", topic);
}

async function run() {
  for (let t of batch) {
    await generateContent(t);
  }
}
run();
