import { Users, CheckCircle, Grid3X3, Image as ImageIcon } from 'lucide-react';

const features = [
  { icon: Users, title: 'Lista de Invitados' },
  { icon: CheckCircle, title: 'Confirmaciones (RSVP)' },
  { icon: Grid3X3, title: 'Asignación de Mesas' },
  { icon: ImageIcon, title: 'Álbum Digital' },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="font-serif text-2xl font-bold text-center mb-16 uppercase tracking-widest">Características Adicionales</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10 text-gray-800 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
