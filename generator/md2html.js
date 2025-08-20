import fs from "fs";
import { marked } from "marked";

const contentDir = "content";
const publicDir = "public";

if (!fs.existsSync(contentDir)) {
  console.error("⚠️ Brak content/ – nie wygenerowano Markdownów.");
  process.exit(0);
}

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const files = fs.readdirSync(contentDir);

let links = []; // Tu zbierzemy linki do stron

files.forEach((file) => {
  if (file.endsWith(".md")) {
    const md = fs.readFileSync(`${contentDir}/${file}`, "utf-8");
    const html = marked(md);

    // nazwa pliku wynikowego
    const outFile = file.replace(".md", ".html");
    const out = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>${file.replace(".md", "")}</title>
      </head>
      <body>
        <h1>${file.replace(".md", "")}</h1>
        ${html}
        <p><a href="index.html">← Powrót do spisu treści</a></p>
      </body>
    </html>
    `;

    // zapis do public/
    fs.writeFileSync(`${publicDir}/${outFile}`, out, "utf8");
    console.log("✔ Skonwertowano →", outFile);

    // dodaj link do spisu treści
    links.push(`<li><a href="${outFile}">${file.replace(".md", "")}</a></li>`);
  }
});

// Generowanie strony głównej index.html
const indexHtml = `
<html>
  <head>
    <style>
      body {
        font-family: "Segoe UI", Roboto, Arial, sans-serif;
        margin: 40px;
        background: #fafafa;
        color: #333;
        line-height: 1.6;
      }
      h1 {
        font-size: 2rem;
        color: #0070f3;
        border-bottom: 3px solid #0070f3;
        padding-bottom: 5px;
      }
      h2 {
        font-size: 1.5rem;
        color: #444;
        margin-top: 30px;
      }
      .quiz, .flashcards, .notes {
        background: #fff;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      }
      .quiz ol {
        padding-left: 20px;
      }
      .quiz li {
        margin-bottom: 12px;
      }
      .answer {
        font-weight:bold;
        color:#0070f3;
      }
      .flashcards ul {
        list-style:none;
        padding-left:0;
      }
      .flashcards li {
        background:#eef6ff;
        margin:8px 0;
        padding:10px;
        border-radius:6px;
      }
      .notes p {
        margin-bottom:12px;
      }
      a.back {
        display:inline-block;
        margin-top:20px;
        color:#0070f3;
        text-decoration:none;
      }
      a.back:hover {
        text-decoration:underline;
      }
    </style>
  </head>
  <body>
    <h1>Fabryka Quizów 🚀</h1>
    <p>Spis wszystkich wygenerowanych materiałów:</p>
    <ul>
      ${links.join("\n")}
    </ul>
  </body>
</html>
`;

fs.writeFileSync(`${publicDir}/index.html`, indexHtml, "utf8");
console.log("✔ Wygenerowano index.html z listą stron.");
