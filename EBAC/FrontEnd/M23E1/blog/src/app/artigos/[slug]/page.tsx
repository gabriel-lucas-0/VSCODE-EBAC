import { getArtigo, getArtigos } from "@/lib/api";
import { notFound } from "next/navigation";



export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const artigo = await getArtigo(slug);

  if (!artigo) return {};

  return {
    title: artigo.titulo,
    description: artigo.conteudo.slice(0, 100),
  };
}

export default async function ArtigoPage({ params }: any) {
  const { slug } = await params;

  const artigo = await getArtigo(slug);

  if (!artigo) return notFound();

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p>
        Por {artigo.autor} em {artigo.data}
      </p>
      <p>{artigo.conteudo}</p>
    </article>
  );
}