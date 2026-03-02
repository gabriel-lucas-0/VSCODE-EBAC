import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/"><h1>Rota Horizonte</h1></Link>
        <nav>
            <Link href="/">Início</Link>
            <Link href="/destinos">Destinos</Link>
        </nav>
    </header>
  );
}
export default Header;