import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Webdding',
    price: '9',
    features: ['Lista de Invitados', 'Notificaciones digitales', 'Privilegios de bodas'],
    highlighted: false,
  },
  {
    name: 'Webdding Pro',
    price: '19',
    features: ['Lista de Invitados', 'Confirmaciones (RSVP)', 'Asignación de Mesas', 'Invitación con itinerario'],
    highlighted: true,
  },
  {
    name: 'Webdding Ultra',
    price: '49',
    features: ['Crea tu invitación digital', 'Invitación de tus sueños', 'Recibe regalos de tus sueños', 'Promociones en tu invitación digital'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-xl ${
                plan.highlighted ? 'border-2 border-gray-900 shadow-2xl transform md:-translate-y-4' : 'border border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white text-center text-[10px] font-bold py-2 rounded-t-xl uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <div className={`text-center ${plan.highlighted ? 'mt-6' : ''}`}>
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1 text-sm">/mes</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-xs text-gray-600">
                    <Check className="w-4 h-4 text-[#f94b63] mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full uppercase tracking-wider text-xs font-bold transition-colors ${
                  plan.highlighted
                    ? 'bg-[#f94b63] text-white hover:bg-[#e03a52] shadow-lg shadow-[#f94b63]/30'
                    : 'bg-[#f94b63] text-white hover:bg-[#e03a52]'
                }`}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
