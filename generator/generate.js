import fs from "fs";
import fetch from "node-fetch";

// Klucz API z GitHub Secrets
const API_KEY = process.env.OPENROUTER_API_KEY;

// Wczytanie fraz z pliku topics.txt
// Wczytaj listę fraz
const topics = fs.readFileSync("topics.txt", "utf8")
  .split("\n")
  .map(x => x.trim())
  .filter(Boolean);

// Wczytaj stan z poprzedniego uruchomienia
let index = 0;
const stateFile = "state.json";
if (fs.existsSync(stateFile)) {
  const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  index = state.index;
}

// Weź następne 5 tematów
const batchSize = 5;
const batch = topics.slice(index, index + batchSize);

// Jeśli dojechaliśmy do końca listy → zacznij od nowa
let newIndex = index + batchSize;
if (newIndex >= topics.length) {
  newIndex = 0;
}

// Zapisz nowy stan
fs.writeFileSync(stateFile, JSON.stringify({ index: newIndex }), "utf8");

async function generateContent(topic) {
  const prompt = `
  Przygotuj materiały edukacyjne dla: "${topic}".
  1. Quiz (5 pytań ABCD z poprawną odpowiedzią zaznaczoną).
  2. 5 fiszek (pojęcie → definicja).
  3. Krótkie notatki (max 250 słów).
  Format: Markdown.
  `;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct",   // 🟢 zmień na taki, który istnieje na openrouter.ai/models
        messages: [{ role: "user", content: prompt }]
      }),
    });

    const data = await response.json();

    // Jeśli coś poszło nie tak (np. error zamiast choices) → logujemy
    if (!data.choices || !data.choices.length) {
      console.error(`❌ Błąd w generowaniu dla "${topic}"`);
      console.error("Odpowiedź API:", JSON.stringify(data, null, 2));
      return;
    }

    const text = data.choices[0].message.content;

    if (!fs.existsSync("content")) fs.mkdirSync("content");
    const safeFile = topic.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
    fs.writeFileSync(`content/${safeFile}.md`, text, "utf8");

    console.log("✔ Wygenerowano:", topic);

  } catch (err) {
    console.error("⚠️ Błąd przy fetchowaniu API:", err);
  }
}

async function run() {
  for (let t of batch) {
    await generateContent(t);
  }
}
run();
