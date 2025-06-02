import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/upload">Subir Script</Link>
      <Link href="/logs">Logs</Link>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </nav>
  );
}
