'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Clock, Palette, Smartphone } from 'lucide-react';

const benefits = [
  {
    id: 'real-time',
    title: 'Confirmación en tiempo real',
    description: 'Recibe notificaciones al instante cuando tus invitados confirmen su asistencia. Olvídate de las llamadas y mensajes interminables.',
    icon: Clock,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'custom-design',
    title: 'Diseños 100% personalizables',
    description: 'Adapta cada detalle de tu invitación para que refleje la esencia de tu boda. Colores, tipografías y fotografías a tu gusto.',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'gifts',
    title: 'Mesa de regalos integrada',
    description: 'Facilita a tus invitados la entrega de regalos con enlaces directos a tus tiendas favoritas o cuentas bancarias de forma discreta.',
    icon: Gift,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'mobile',
    title: 'Experiencia móvil perfecta',
    description: 'Tus invitados podrán ver tu invitación, confirmar asistencia y ver los detalles del evento desde cualquier dispositivo sin problemas.',
    icon: Smartphone,
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function Benefits() {
  const [activeId, setActiveId] = useState(benefits[0].id);

  return (
    <section className="py-24 bg-[#fdfbf9] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-900">¿Por qué elegir Mi Webdding?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre todas las ventajas de digitalizar la experiencia de tus invitados antes, durante y después de tu gran día.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Interactive List */}
          <div className="w-full lg:w-1/2 space-y-4">
            {benefits.map((benefit) => {
              const isActive = activeId === benefit.id;
              const Icon = benefit.icon;
              return (
                <button
                  key={benefit.id}
                  onClick={() => setActiveId(benefit.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                    isActive ? 'border-[#f94b63] bg-white shadow-md' : 'border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? 'bg-[#f94b63] text-white' : benefit.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                        {benefit.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            className="text-gray-600 text-sm overflow-hidden"
                          >
                            {benefit.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Display */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-teal-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <AnimatePresence mode="wait">
                {benefits.map((benefit) => {
                  if (benefit.id !== activeId) return null;
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-full h-full bg-white/80 backdrop-blur-sm border border-white shadow-2xl rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 ${benefit.color} bg-opacity-20`}>
                          <Icon className={`w-16 h-16 ${benefit.color.split(' ')[1]}`} />
                        </div>
                        <h3 className="font-serif text-3xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600 text-lg">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
