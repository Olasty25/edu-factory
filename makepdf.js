import fs from "fs";
import { marked } from "marked";
import puppeteer from "puppeteer";

const files = fs.readdirSync("content")
  .filter(f => f.endsWith(".md"))
  .map(f => `content/${f}`);

let combined = files.map(f => {
  const md = fs.readFileSync(f, "utf8");

  // Wyciągnięcie tylko sekcji "## Quiz" do następnego "##"
  const match = md.match(/## Quiz([\s\S]*?)(?=##|$)/);

  if (match) {
    return `# ${f.replace("content/", "").replace(".md", "")}\n\n${match[0]}`;
  } else {
    return ""; // jeśli brak quizu, pomijamy
  }
}).join("\n\n---\n\n");

// Konwersja Markdown → HTML
const combinedHtml = marked(combined);

// Szablon HTML do PDF
const htmlTemplate = `
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: "Arial", sans-serif; margin: 40px; line-height: 1.6; }
      h1 { color: #0070f3; border-bottom: 2px solid #0070f3; }
      h2 { color: #333; margin-top: 20px; }
      .question { margin-bottom: 15px; }
    </style>
  </head>
  <body>
    <h1>Pakiet PDF: Quizy</h1>
    <p>Tylko sekcje Quiz w jednym dokumencie.</p>
    <hr>
    ${combinedHtml}
  </body>
</html>
`;

async function generatePDF() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();
  await page.setContent(htmlTemplate, { waitUntil: "load" });
  await page.pdf({
    path: "Pakiet_Quizy.pdf",
    format: "A4",
    printBackground: true
  });
  await browser.close();
  console.log("✔ Wygenerowano: Pakiet_Quizy.pdf");
}

generatePDF();
