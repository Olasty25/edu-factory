import fs from "fs";
import { marked } from "marked";

const contentDir = "content";
const publicDir = "public";

// sprawdź, czy mamy jakieś treści
if (!fs.existsSync(contentDir)) {
  console.error("⚠️ Brak katalogu content/ – nie wygenerowano żadnych plików .md");
  process.exit(0);
}

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const files = fs.readdirSync(contentDir);

files.forEach((file) => {
  if (file.endsWith(".md")) {
    const md = fs.readFileSync(`${contentDir}/${file}`, "utf-8");
    const html = marked(md);

    const out = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>${file.replace(".md", "")}</title>
      </head>
      <body>
        ${html}
      </body>
    </html>
    `;

    fs.writeFileSync(`${publicDir}/${file.replace(".md", ".html")}`, out, "utf8");
    console.log("✔ Skonwertowano →", file.replace(".md", ".html"));
  }
});
