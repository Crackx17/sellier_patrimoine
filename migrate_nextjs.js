const fs = require("fs");
const path = require("path");

// 📌 Définition des chemins
const srcDir = path.join(__dirname, "src");
const appDir = path.join(__dirname, "app");
const componentsDir = path.join(srcDir, "components");

// 📌 Fichiers et dossiers à supprimer (propres à Vite)
const viteFiles = ["vite.config.ts", "index.html", "tsconfig.app.json"];
const viteDirs = ["public", ".vite", "dist"];

// 📌 Remplacement des importations de `react-router-dom`
const replaceReactRouter = (filePath) => {
    let content = fs.readFileSync(filePath, "utf8");

    if (content.includes("react-router-dom")) {
        console.log(`🔄 Mise à jour des routes dans : ${filePath}`);

        content = content
            .replace(/import\s+\{\s*BrowserRouter[^}]*\}\s+from\s+"react-router-dom";?/g, "")
            .replace(/import\s+\{\s*Link\s*\}\s+from\s+"react-router-dom";?/g, 'import Link from "next/link";')
            .replace(/import\s+\{\s*useNavigate\s*\}\s+from\s+"react-router-dom";?/g, 'import { useRouter } from "next/navigation";')
            .replace(/useNavigate\(\)/g, "useRouter()")
            .replace(/<Link\s+to=/g, "<Link href=");

        fs.writeFileSync(filePath, content, "utf8");
    }
};

// 📌 Ajout de "use client" en haut des fichiers composants React
const addUseClientDirective = (filePath) => {
    let content = fs.readFileSync(filePath, "utf8");

    if (!content.startsWith('"use client";')) {
        console.log(`✅ Ajout de "use client"; dans ${filePath}`);
        fs.writeFileSync(filePath, '"use client";\n' + content, "utf8");
    }
};

// 📌 Parcours récursif des fichiers et application des modifications
const processFiles = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processFiles(filePath);
        } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
            replaceReactRouter(filePath);
            addUseClientDirective(filePath);
        }
    });
};

// 📌 Supprimer les fichiers et dossiers Vite
const removeViteFiles = () => {
    viteFiles.forEach((file) => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            console.log(`🗑 Suppression de ${filePath}`);
            fs.unlinkSync(filePath);
        }
    });

    viteDirs.forEach((dir) => {
        const dirPath = path.join(__dirname, dir);
        if (fs.existsSync(dirPath)) {
            console.log(`🗑 Suppression du dossier ${dirPath}`);
            fs.rmSync(dirPath, { recursive: true, force: true });
        }
    });
};

// 📌 Création de `next.config.js`
const createNextConfig = () => {
    const nextConfigPath = path.join(__dirname, "next.config.js");

    if (!fs.existsSync(nextConfigPath)) {
        console.log(`📄 Création de next.config.js`);
        fs.writeFileSync(
            nextConfigPath,
            `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;`,
            "utf8"
        );
    }
};

// 📌 Création de l’arborescence pour Next.js
const createNextStructure = () => {
    if (!fs.existsSync(appDir)) {
        console.log(`📂 Création du dossier app/ pour Next.js`);
        fs.mkdirSync(appDir);
    }

    if (!fs.existsSync(path.join(appDir, "page.tsx"))) {
        console.log(`📄 Création de app/page.tsx`);
        fs.writeFileSync(
            path.join(appDir, "page.tsx"),
            `export default function Home() {
  return <h1>Bienvenue sur Next.js ! 🚀</h1>;
}`,
            "utf8"
        );
    }

    if (!fs.existsSync(path.join(appDir, "layout.tsx"))) {
        console.log(`📄 Création de app/layout.tsx`);
        fs.writeFileSync(
            path.join(appDir, "layout.tsx"),
            `import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}`,
            "utf8"
        );
    }
};

// 📌 Exécution des étapes de migration
console.log("🚀 Démarrage de la migration de Vite à Next.js...");
removeViteFiles();
processFiles(srcDir);
createNextConfig();
createNextStructure();
console.log("✅ Migration terminée avec succès !");
