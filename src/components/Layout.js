import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="logo">Proyecto LV</div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <p> 2025 L & V. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}