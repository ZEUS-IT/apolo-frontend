import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'zeus' && password === 'D4v1nc1*255') {
      router.push('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1>APOLO RPA</h1>
      <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} style={{ margin: 10, padding: 10 }} />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ margin: 10, padding: 10 }} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
