import express from 'express';
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Create an uploads directory
  const uploadDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Serve static files from the uploads directory
  app.use('/uploads', express.static(uploadDir));

  // Set up multer for file uploads
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      // Use original name but sanitize it just in case
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, `model-${uniqueSuffix}${ext}`);
    }
  });

  const upload = multer({ storage: storage });

  // API Route to handle file upload
  app.post('/api/upload', upload.single('model'), (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    
    // Construct the public URL for the file
    // In our environment, the app runs on root
    const fileUrl = `/uploads/${req.file.filename}`;
    
    // Fix multer originalname latin1 encoding issue for utf8 filenames
    const originalName = Buffer.from(req.file.originalname, 'latin1').toString('utf8');
    
    res.json({ url: fileUrl, filename: originalName, size: req.file.size });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
