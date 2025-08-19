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

files.forEach((file) => {
  if (file.endsWith(".md")) {
    const md = fs.readFileSync(`${contentDir}/${file}`, "utf-8");
    const html = marked(md);

    const out = `
    <html>
      <head><meta charset="utf-8"><title>${file}</title></head>
      <body>${html}</body>
    </html>
    `;

    // zapis do public/
    fs.writeFileSync(`${publicDir}/${file.replace(".md", ".html")}`, out, "utf8");
    console.log("✔ Skonwertowano →", file.replace(".md", ".html"));
  }
});
