import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("https://apolo-backend.onrender.com/upload-script/", {
      method: "POST",
      body: formData
    });
    const result = await res.json();
    setMessage(result.message || 'Error');
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Subir Script</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Subir</button>
      <p>{message}</p>
    </div>
  );
}
