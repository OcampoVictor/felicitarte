import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="font-bold mb-6 text-sm">Contacto</h4>
          <p className="text-gray-400 text-xs mb-2">Houston Address</p>
          <p className="text-gray-400 text-xs mb-2">Ventas/Oficinas: 20 16805</p>
          <p className="text-gray-400 text-xs">www.webdding.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm">Acerca de</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Recomendaciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacidad de datos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terminos y condiciones</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm">Redes sociales</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm">Sellos de confianza</h4>
          <div className="flex space-x-2">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-[8px] text-center leading-tight text-gray-400">Badge 1</div>
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-[8px] text-center leading-tight text-gray-400">Badge 2</div>
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-[8px] text-center leading-tight text-gray-400">Badge 3</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
        <p>© Mi Webdding. Todos los derechos reservados.</p>
        <p>Precios en moneda de 2024</p>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-[#f94b63] rounded-full flex items-center justify-center text-white shadow-xl hover:bg-[#e03a52] transition-colors z-50">
        <MessageCircle className="w-5 h-5" />
      </button>
    </footer>
  );
}
