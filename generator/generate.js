const fs = require("fs");
const fetch = require("node-fetch");

const API_KEY = process.env.OPENROUTER_API_KEY;

// Wczytaj wszystkie frazy
const topics = fs.readFileSync("topics.txt", "utf8")
  .split("\n")
  .map(x => x.trim())
  .filter(Boolean);

// Wczytaj ostatni indeks z pliku state.json
let index = 0;
const stateFile = "state.json";
if (fs.existsSync(stateFile)) {
  const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
  index = state.index;
}

// Ile fraz generować na jeden run
const batchSize = 5;

// Wyciągnij batch
const batch = topics.slice(index, index + batchSize);

// Jak przesunąć indeks na kolejny run
let newIndex = index + batchSize;
if (newIndex >= topics.length) {
  newIndex = 0; // reset do początku listy
}

// Zapisz nowy stan
fs.writeFileSync(stateFile, JSON.stringify({ index: newIndex }), "utf8");

async function generateContent(topic) {
  const prompt = `Twoim zadaniem jest stworzenie materiałów edukacyjnych dla tematu "${topic}". 
  Zwróć Markdown z trzema sekcjami: Quiz (5 pytań ABCD + poprawne), Fiszki (5 sztuk), Notatki (200 słów).`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mixtral-8x7b-instruct",
      messages: [{ role: "user", content: prompt }]
    }),
  });

  const data = await response.json();

  if (!data.choices) {
    console.error("❌ Błąd API:", JSON.stringify(data, null, 2));
    return;
  }

  const text = data.choices[0].message.content;
  if (!fs.existsSync("content")) fs.mkdirSync("content");

  const safeFile = topic.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");
  fs.writeFileSync(`content/${safeFile}.md`, text, "utf8");
  console.log("✔ Wygenerowano:", topic);
}

(async () => {
  for (let t of batch) {
    await generateContent(t);
  }
})();
