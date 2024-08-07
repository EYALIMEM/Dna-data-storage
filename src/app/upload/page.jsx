"use client"
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

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
      date: new Date().toLocaleDateString(), // Ajout de la date d'upload

    }));
    setUploadedFiles([...uploadedFiles, ...uploaded]);
    setFiles([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-3xl bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">File Upload</h1>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Upload
        </button>
        <h2 className="text-xl font-semibold text-gray-800">Uploaded Files</h2>
        <ul className="list-disc list-inside space-y-4"> {/* Espacement entre les fichiers */}
          {uploadedFiles.map((file, index) => (
            <li key={index} className="text-gray-700 flex space-x-2"> {/* Espacement entre les informations */}
              <div><strong>Name:</strong> {file.name}</div>
              <div><strong>Size:</strong> {file.size} bytes</div>
              <div><strong>Type:</strong> {file.type}</div>
              <div><strong>Upload Date:</strong> {file.date}</div> {/* Affichage de la date */}
              <div> <FaDownload size={24}/> </div>
         
            </li>
          ))}
        </ul>
      </div>
    </div>
  

  );
};

export default UploadPage;
