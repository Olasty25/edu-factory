import fs from "fs";
import fetch from "node-fetch";

const API_KEY = process.env.OPENROUTER_API_KEY; // wrzucisz do GitHub Secrets
const TOPIC = process.argv[2] || "Balladyna streszczenie"; 

async function generateContent(topic) {
  const prompt = `
  Napisz krótkie materiały edukacyjne dla tematu: "${topic}".

  1. Quiz (5 pytań ABCD z poprawną odpowiedzią zaznaczoną).
  2. 5 fiszek (pojęcie → definicja).
  3. 1 strona notatek (max 250 słów).

  Zwróć w formacie Markdown.
  `;
  
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",  // na OpenRouter znajdziesz darmowe/free modele
      messages: [{ role: "user", content: prompt }],
    }),
  });
  
  const data = await response.json();
  const text = data.choices[0].message.content;

  // zapisz do pliku w katalogu /content
  if (!fs.existsSync("content")) fs.mkdirSync("content");
  fs.writeFileSync(`content/${topic.replace(/\s+/g, "_")}.md`, text);

  console.log("Wygenerowano paczkę dla:", topic);
}

generateContent(TOPIC);
