import Image from 'next/image';

const items = [
  { title: 'Memorias', image: 'https://i.postimg.cc/ZRDvTLTD/img_memorias_5.jpg' },
  { title: 'Vintage', image: 'https://i.postimg.cc/MZhLKDkn/hero_vintage.jpg' },
  { title: 'Romance', image: 'https://i.postimg.cc/gkgrmrG2/novios_2.jpg' },
  { title: 'Elegancia', image: 'https://i.postimg.cc/sD5K2J7x/novios_3.jpg' },
  { title: 'Clásico', image: 'https://i.postimg.cc/yxdhjdNw/img_memorias_3.jpg' },
];

export default function Showcase() {
  return (
    <section className="py-16 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-serif text-2xl font-bold text-center mb-12 uppercase tracking-widest">Galería de Invitaciones</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="relative h-64 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-between items-center">
                <h3 className="font-serif font-bold text-lg mb-4">{item.title}</h3>
                <button className="border border-gray-300 text-gray-700 text-[10px] font-bold uppercase tracking-wider py-2 px-4 rounded hover:bg-gray-50 transition-colors w-full">
                  Diseña tu boda
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
