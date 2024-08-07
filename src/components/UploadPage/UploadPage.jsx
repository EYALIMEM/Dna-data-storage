"use client"
import { useState } from 'react';

const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleUpload = () => {
    // Simuler l'upload et l'ajout à la liste des fichiers téléchargés
    const uploaded = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setUploadedFiles([...uploadedFiles, ...uploaded]);
    setFiles([]);
  };

  return (
    <div>
      <h1>Upload de fichiers</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Uploader</button>
      <h2>Fichiers téléchargés</h2>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            <strong>Nom :</strong> {file.name} <br />
            <strong>Taille :</strong> {file.size} bytes <br />
            <strong>Type :</strong> {file.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadPage;
