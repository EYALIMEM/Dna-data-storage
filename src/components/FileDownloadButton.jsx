import { FaDownload } from 'react-icons/fa';

const FileDownloadButton = ({ file }) => {
  // Vérifier si file est défini avant d'accéder à ses propriétés
  if (!file || !file.url) {
    return null; // ou afficher un autre élément de fallback
  }

  return (
    <a href={file.url} download={file.name} className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
      <FaDownload />
      <span>Download</span>
    </a>
  );
};

export default FileDownloadButton;
