// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-24 text-center bg-gradient-to-br from-blue-50 to-purple-100">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">あいがけ / Aigake</h1>
        <p className="text-lg sm:text-xl mb-6">フロントエンド × AIで、表現の可能性をひろげる</p>
        <Link href="/works">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            作品を見る
          </button>
        </Link>
      </section>

      {/* Works Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">最近の作品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['ai1.jpg', 'ai2.jpg', 'ai3.jpg'].map((img, i) => (
            <div key={i} className="rounded overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={`/works/${img}`}
                alt={`Work ${i + 1}`}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-4 text-center text-sm">AI Illustration {i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">自己紹介</h2>
          <p className="mb-6">
            元金融のITコンサル。AIアートと創作が好きなエンジニアです。
            小説やイラストの発信も行っています。
          </p>
          <Link href="/profile">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition">
              プロフィールを見る
            </button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
        <p className="mb-6">お仕事やご相談など、お気軽にご連絡ください。</p>
        <Link href="/contact">
          <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
            お問い合わせフォームへ
          </button>
        </Link>
      </section>
    </main>
  );
}
