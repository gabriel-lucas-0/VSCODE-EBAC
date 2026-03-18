import Link from "next/link";
import { getArtigos } from "@/lib/api";

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.slug}>
            <Link href={`/artigos/${artigo.slug}`} className="post-link">
              <span className="post-title">{artigo.titulo}</span>
              <span className="post-arrow">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
