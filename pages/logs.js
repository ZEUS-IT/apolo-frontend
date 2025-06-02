import { useEffect, useState } from 'react';

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("https://apolo-backend.onrender.com/logs")
      .then(res => res.json())
      .then(data => setLogs(data.logs || []));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Logs</h2>
      {logs.length === 0 ? <p>No hay logs.</p> : (
        <ul>
          {logs.map((log, i) => <li key={i}>{log}</li>)}
        </ul>
      )}
    </div>
  );
}
