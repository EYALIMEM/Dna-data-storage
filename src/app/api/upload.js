// pages/api/upload.js
import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import File from '../../models/File'; // Assurez-vous que le chemin est correct

import fs from 'fs';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect('mongodb://localhost:27017/dna-storage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadsDir = path.join(process.cwd(), 'public/uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.array('files'));

apiRoute.post((req, res) => {
  const files = req.files.map((file) => ({
    name: file.originalname,
    size: file.size,
    type: file.mimetype,
    url: `/uploads/${file.filename}`, // URL publique
    uploadDate: new Date().toISOString(),
  }));

  // Sauvegardez les informations des fichiers dans une base de données si nécessaire
  res.status(200).json(files);
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Désactiver le body parser par défaut pour les uploads de fichiers
  },
};
