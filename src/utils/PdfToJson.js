import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerSrc;

export async function pdfToJson(url) {
  const res = await fetch(url);

  console.log("status", res.status);
  console.log("content-type", res.headers.get("content-type"));

  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("pdf")) {
    const text = await res.text();
    throw new Error(
      `Not a PDF (content-type: ${ct}). Response starts: ${text.slice(0, 80)}`
    );
  }

  const arrayBuffer = await res.arrayBuffer();
  const pdf = await getDocument({ data: arrayBuffer }).promise;

  const allLines = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const items = textContent.items
      .map((item) => ({
        text: String(item.str || "").trim(),
        x: item.transform[4],
        y: item.transform[5],
      }))
      .filter((i) => i.text);

    // top → bottom; left → right within same line
    items.sort((a, b) => (b.y - a.y) || (a.x - b.x));

    // group into lines
    const lines = [];
    let current = [];
    let lastY = null;

    for (const it of items) {
      if (lastY === null || Math.abs(it.y - lastY) < 5) {
        current.push(it.text);
      } else {
        lines.push(current.join(" "));
        current = [it.text];
      }
      lastY = it.y;
    }
    if (current.length) lines.push(current.join(" "));

    allLines.push(...lines);
  }

  return parseSections(allLines);
}

const SECTION_HEADERS = [
  { key: "summary", match: /^summary$/i },
  { key: "skills_interests", match: /^skills\s*&\s*interests$/i },
  { key: "experience", match: /^experience$/i },
  { key: "education", match: /^education$/i },
  { key: "projects", match: /^projects?$/i },
];

function parseSections(lines) {
    const result = {
      summary: "",
      skills_interests: {
        Frontend: "",
        Backend: "",
        Database: "",
        "DevOps/OS": "",
        "AI Tools": "",
        "Version Control/ SDLC/ tools": "",
        Other: "",
      },
      experience: [],
      education: [],
      projects: [],
      other: [],
    };
  
    let current = "other";
  
    for (const raw of lines) {
      const line = raw.replace(/\s+/g, " ").trim();
      if (!line) continue;
  
      // 🔹 Detect main section header
      const header = SECTION_HEADERS.find((h) => h.match.test(line));
      if (header) {
        current = header.key;
        continue;
      }
  
      // 🔹 SUMMARY → keep as single string
      if (current === "summary") {
        result.summary += (result.summary ? " " : "") + line;
        continue;
      }
  
      // 🔹 SKILLS & INTERESTS → parse key:value directly
      if (current === "skills_interests") {
        const idx = line.indexOf(":");
  
        if (idx === -1) continue; // skip malformed lines
  
        const keyRaw = line.slice(0, idx).trim();
        const value = line.slice(idx + 1).trim();
  
        if (!value) continue;
  
        // Normalize key
        let key = "Other";
        const k = keyRaw.toLowerCase();
  
        if (k.startsWith("front")) key = "Frontend";
        else if (k.startsWith("back")) key = "Backend";
        else if (k.startsWith("data")) key = "Database";
        else if (k.startsWith("devops")) key = "DevOps/OS";
        else if (k.startsWith("ai")) key = "AI Tools";
        else if (k.includes("version control") || k.includes("sdlc"))
          key = "Version Control/ SDLC/ tools";
  
        result.skills_interests[key] +=
          (result.skills_interests[key] ? " " : "") + value;
  
        continue;
      }
  
      // 🔹 All other sections → arrays
      result[current].push(line);
    }

    downloadJson(result)
  
    return result;
  }
  
  function downloadJson(data, filename = "resume.json") {
    const jsonString = JSON.stringify(data, null, 2); // pretty format
  
    const blob = new Blob([jsonString], {
      type: "application/json",
    });
  
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  
    URL.revokeObjectURL(url);
  }