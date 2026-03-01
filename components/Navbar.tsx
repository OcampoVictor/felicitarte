import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-[1600px] mx-auto w-full">
      <div className="font-serif text-2xl font-bold">Mi Webdding</div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link href="#" className="hover:text-[#f94b63] transition-colors border-b-2 border-transparent hover:border-[#f94b63] pb-1">Inicio</Link>
        <Link href="#" className="hover:text-[#f94b63] transition-colors border-b-2 border-transparent hover:border-[#f94b63] pb-1">Perfiles</Link>
        <Link href="#" className="hover:text-[#f94b63] transition-colors border-b-2 border-transparent hover:border-[#f94b63] pb-1">Aliados</Link>
        <Link href="#" className="hover:text-[#f94b63] transition-colors border-b-2 border-transparent hover:border-[#f94b63] pb-1">Iniciar Sesión</Link>
        <button className="bg-[#f94b63] text-white px-6 py-2.5 rounded-full hover:bg-[#e03a52] transition-colors uppercase tracking-wider text-xs font-bold">
          Diseña tu boda
        </button>
      </div>
    </nav>
  );
}
