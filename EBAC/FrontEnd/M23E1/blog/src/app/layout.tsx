import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Meu Blog",
  description: "Blog criado com Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="container">
            <h1 className="logo">
              <Link href="/" className="logo-link">
                Meu Blog
              </Link>
            </h1>

            <nav className="nav">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} - Meu Blog</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
