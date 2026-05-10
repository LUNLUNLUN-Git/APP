import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { exec } from "child_process";
import fs from "fs/promises";
import { promisify } from "util";

const execAsync = promisify(exec);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to generate and return the single-file bundled app
  app.get("/api/export-bundle", async (req, res) => {
    try {
      const publicPath = path.resolve(process.cwd(), "public/export-bundle.html");
      const exportDistPath = path.resolve(process.cwd(), "export-dist/index.html");
      
      let htmlContent = '';
      try {
        htmlContent = await fs.readFile(publicPath, "utf-8");
      } catch (e) {
        try {
          htmlContent = await fs.readFile(exportDistPath, "utf-8");
        } catch (e2) {
          console.log("Starting single-file export build...");
          await execAsync("npx vite build --config vite.config.export.ts");
          htmlContent = await fs.readFile(exportDistPath, "utf-8");
        }
      }

      res.setHeader("Content-Type", "text/html");
      res.send(htmlContent);
    } catch (error) {
      console.error("Export build failed:", error);
      res.status(500).json({ error: String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Standard production build is in 'dist'
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
