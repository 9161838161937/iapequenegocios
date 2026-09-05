import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  const latestPosts = posts.slice(0, 5)

  return (
    <div>
      <section className="py-16 text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          IA para Pequenos Negócios
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Aprenda a automatizar seu negócio com inteligência artificial (sem programar)
        </p>
        
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8 inline-block">
          <h2 className="text-2xl font-bold mb-4">Receba 10 Prompts de IA Grátis</h2>
          <p className="text-gray-700 mb-6">
            Prompts que economizam 3 horas por semana no seu negócio. 
            Copy-paste e pronto!
          </p>
          <Link 
            href="/lead-magnet"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-700"
          >
            Baixar PDF Grátis
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Últimos Artigos</h2>
        
        <div className="space-y-8">
          {latestPosts.map((post) => (
            <article 
              key={post.slug}
              className="border-b border-gray-200 pb-8"
            >
              <h3 className="text-2xl font-bold mb-2">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                {post.date} • {post.readingTime}
              </p>
              <p className="text-gray-700 mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 font-bold hover:underline"
              >
                Ler mais →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
