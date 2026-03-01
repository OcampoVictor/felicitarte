import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Dianisa Franco',
    text: 'Me encanto el servicio, super facil de usar y la invitacion quedo hermosa. Todos mis invitados quedaron fascinados.',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    rating: 5,
    hasVideo: false,
  },
  {
    name: 'Maria & Juan',
    text: 'Tu equipo nos ayudo con todo para nuestra boda, la confirmacion de asistencia fue super util.',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    rating: 5,
    hasVideo: true,
    videoThumb: 'https://picsum.photos/seed/vid1/400/300',
  },
  {
    name: 'Donnon Abildoa',
    text: 'Viendo otras opciones en el mercado, Webdding es por mucho la mejor. La atencion al cliente es excelente.',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    rating: 5,
    hasVideo: false,
  },
  {
    name: 'Ana & Carlos',
    text: 'Nos encanto poder tener el control de nuestros invitados y la asignacion de mesas de forma tan sencilla.',
    avatar: 'https://picsum.photos/seed/user4/100/100',
    rating: 5,
    hasVideo: true,
    videoThumb: 'https://picsum.photos/seed/vid2/400/300',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fcf6f5]">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h2 className="font-serif text-2xl font-bold text-center mb-16 uppercase tracking-widest">Reseñas de nuestros clientes</h2>
        
        <div className="flex items-center justify-between">
          <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 z-10 hidden md:block absolute left-0 -ml-4">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="grid md:grid-cols-4 gap-6 overflow-hidden w-full">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mb-6 flex-grow leading-relaxed">&quot;{t.text}&quot;</p>
                <p className="font-bold text-xs mb-4">{t.name}</p>
                
                {t.hasVideo && t.videoThumb && (
                  <div className="w-full h-28 relative rounded-xl overflow-hidden mt-auto group cursor-pointer">
                    <Image src={t.videoThumb} alt="Video thumbnail" fill className="object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#f94b63] rounded-full flex items-center justify-center text-white shadow-lg">
                        <Play className="w-3 h-3 ml-0.5 fill-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 z-10 hidden md:block absolute right-0 -mr-4">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-10">
          <div className="w-2 h-2 rounded-full bg-[#f94b63]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
