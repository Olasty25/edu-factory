import fs from "fs";
import path from "path";

const API_KEY = process.env.OPENROUTER_API_KEY;

// absolutna ścieżka do pliku w katalogu repo
const stateFile = path.join(process.cwd(), "state.json");

// wczytaj frazy
const topics = fs.readFileSync("topics.txt", "utf8")
  .split("\n")
  .map(x => x.trim())
  .filter(Boolean);

// wczytaj poprzedni stan
let index = 0;
if (fs.existsSync(stateFile)) {
  try {
    const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
    index = state.index || 0;
  } catch {
    index = 0;
  }
}

// batch size
const batchSize = 5;
const batch = topics.slice(index, index + batchSize);

// oblicz nowy index
let newIndex = index + batchSize;
if (newIndex >= topics.length) newIndex = 0;

// zapisz stan
fs.writeFileSync(stateFile, JSON.stringify({ index: newIndex }, null, 2), "utf8");
console.log("📁 Zaktualizowano state.json →", newIndex);

// ... dalej Twój kod generateContent / fetch / zapis plików

async function generateContent(topic) {
  const prompt = `Twoim zadaniem jest stworzenie materiałów edukacyjnych dla tematu "${topic}". 
  Zwróć Markdown z trzema sekcjami: Quiz (5 pytań ABCD + poprawna odpowiedź), Fiszki (5 sztuk), Notatki (~200 słów).`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mixtral-8x7b-instruct", // np. Mistral
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
