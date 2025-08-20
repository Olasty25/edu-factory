import fs from "fs";
import { marked } from "marked";
import puppeteer from "puppeteer";

// Lista plików, które chcesz scalić w pakiet
const files = [
  "content/Balladyna_streszczenie.md",
  "content/Lalka_streszczenie.md",
  "content/Pan_Tadeusz_streszczenie.md",
  "content/Dziady_III_streszczenie.md",
  "content/Antygona_streszczenie.md"
];

async function generatePDF() {
  console.log("📑 Tworzenie pakietu PDF z plików:", files);

  // Scal zawartość plików markdown
  let combinedMd = files.map(f => fs.readFileSync(f, "utf8")).join("\n\n---\n\n");
  const combinedHtml = marked(combinedMd);

  // Prosty szablon HTML (możesz dodać style CSS)
  const htmlTemplate = `
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: "Arial", sans-serif; margin: 40px; line-height: 1.6; }
        h1,h2,h3 { color: #0070f3; }
        hr { margin: 30px 0; }
      </style>
    </head>
    <body>
      <h1>📘 Pakiet PDF: 5 lektur na maturę</h1>
      <p>Streszczenia + fiszki + quizy</p>
      <hr>
      ${combinedHtml}
    </body>
  </html>
  `;

  // Zapisz HTML tymczasowo
  fs.writeFileSync("bundle.html", htmlTemplate, "utf8");

  // Uruchom puppeteer i stwórz PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlTemplate, { waitUntil: "load" });
  await page.pdf({
    path: "Pakiet_Lektury.pdf",
    format: "A4",
    printBackground: true
  });
  await browser.close();

  console.log("✔ Wygenerowano: Pakiet_Lektury.pdf");
}

generatePDF();
