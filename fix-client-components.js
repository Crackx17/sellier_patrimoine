const fs = require("fs");
const path = require("path");

// 📌 Dossiers à scanner (composants et pages)
const DIRECTORIES = [
  path.join(__dirname, "app/components"),
  path.join(__dirname, "app/pages"),
];

// 📌 Hooks React à détecter
const HOOKS = ["useState", "useEffect", "useRef", "useContext", "useReducer", "useMemo", "useCallback"];

// 📌 Fonction pour scanner et modifier les fichiers
function processFile(filePath) {
  if (!filePath.endsWith(".tsx")) return;

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // ✅ Vérifie si "use client"; est déjà présent mais mal placé
  if (content.includes('"use client";') && !content.startsWith('"use client";')) {
    console.log(`🔄 Correction de l'ordre de "use client"; dans : ${filePath}`);
    content = content.replace('"use client";\n', ""); // Supprime l'ancienne directive
    content = `"use client";\n` + content; // La replace en haut
    modified = true;
  }

  // ✅ Vérifie si le fichier contient un hook React et ajoute "use client"; si nécessaire
  const usesHooks = HOOKS.some((hook) => content.includes(hook));
  if (usesHooks && !content.startsWith('"use client";')) {
    console.log(`✅ Ajout de "use client"; dans : ${filePath}`);
    content = `"use client";\n${content}`;
    modified = true;
  }

  // ✅ Remplace `to="..."` par `href="..."` pour Next.js
  if (content.includes(' to="')) {
    console.log(`🔄 Correction des liens (to → href) dans : ${filePath}`);
    content = content.replace(/ to="/g, ' href="');
    modified = true;
  }

  // ✅ Supprime `react-router-dom`
  if (content.includes("react-router-dom")) {
    console.log(`❌ Suppression de react-router-dom dans : ${filePath}`);
    content = content.replace(/import .* from ['"]react-router-dom['"];\n?/g, "");
    modified = true;
  }

  // ✅ Remplace `useLocation` par `usePathname` de Next.js
  if (content.includes("useLocation")) {
    console.log(`🔄 Remplacement de useLocation → usePathname dans : ${filePath}`);
    content = content.replace("useLocation", "usePathname");
    content = 'import { usePathname } from "next/navigation";\n' + content;
    modified = true;
  }

  // ✅ Ajoute `import Link from "next/link";` si `<Link>` est utilisé mais pas encore importé
  if (content.includes("<Link") && !content.includes('import Link from "next/link";')) {
    console.log(`🔄 Ajout de next/link dans : ${filePath}`);
    content = 'import Link from "next/link";\n' + content;
    modified = true;
  }

  // ✅ Sauvegarde les modifications
  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

// 📌 Fonction pour parcourir les dossiers récursivement
function scanDirectory(directory) {
  if (!fs.existsSync(directory)) return;

  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else {
      processFile(fullPath);
    }
  });
}

// 📌 Exécution du script
console.log("🚀 Lancement de la correction automatique...");
DIRECTORIES.forEach(scanDirectory);
console.log("🎉 Correction terminée !");
