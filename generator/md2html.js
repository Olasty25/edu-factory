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
    <meta charset="utf-8">
    <title>Fabryka Quizów 🚀</title>
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
