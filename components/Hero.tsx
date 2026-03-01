import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#fdfbf9] relative overflow-hidden flex flex-col md:flex-row min-h-[600px] xl:min-h-[700px]">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end p-8 md:py-24 md:pr-12 lg:pr-24">
        <div className="max-w-xl w-full z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-gray-900">
            Creando la boda<br />de tus sueños
          </h1>
          <p className="text-gray-600 mb-8 max-w-md text-base leading-relaxed">
            Menos estrés con un servicio moderno y sofisticado de invitaciones digitales y planeación para tu evento.
          </p>
          <div className="mb-8">
            <span className="text-[#f94b63] text-4xl lg:text-5xl font-bold block mb-1">28% de descuento</span>
            <p className="text-gray-800 font-bold text-lg">en tu invitación digital</p>
          </div>
          <button className="bg-[#f94b63] text-white px-8 py-4 rounded-full hover:bg-[#e03a52] transition-colors uppercase tracking-wider text-sm font-bold shadow-lg shadow-[#f94b63]/30">
            Diseña tu boda
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto md:min-h-[600px] xl:min-h-[700px]">
        <Image
          src="https://i.postimg.cc/L5Xm93Gj/vintage_momentos_1.jpg"
          alt="Pareja de novios"
          fill
          className="object-cover md:rounded-tl-[100px] md:rounded-bl-[100px]"
          referrerPolicy="no-referrer"
          priority
        />
      </div>
    </section>
  );
}
