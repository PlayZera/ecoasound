import Link from 'next/link';

// Dados mockados (substitua depois por dados do Firebase)
const mockReviews = [
  {
    id: 1,
    song: "Bohemian Rhapsody",
    artist: "Queen",
    cover: "https://i.scdn.co/image/ab67616d0000b273e8b7b5b5a5a5a5a5a5a5a5a5",
    review: "Uma obra-prima atemporal! Freddie Mercury era um gênio.",
    rating: 5,
    user: "Ana Silva",
  },
  {
    id: 2,
    song: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://i.scdn.co/image/ab67616d0000b273e8b7b5b5a5a5a5a5a5a5a5a5",
    review: "Synthwave perfeito para dançar até o amanhecer.",
    rating: 4,
    user: "Carlos Oliveira",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8 bg-black">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Reviews recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReviews.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src={item.cover} 
                      alt={`Capa de ${item.song}`} 
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{item.song}</h3>
                      <p className="text-gray-600">{item.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-xl ${i < item.rating ? 'text-blue-600' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">"{item.review}"</p>
                  <p className="text-sm text-gray-500">— {item.user}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="text-center py-12 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Quer compartilhar sua opinião?</h2>
          <Link 
            href="/signup" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
          >
            Criar conta gratuita
          </Link>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-white text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            © 2025 EcoaSound. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}