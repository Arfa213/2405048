import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[280px] overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1689443440850-de2e425740cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZb2d5YWthcnRhJTIwSW5kb25lc2lhJTIwdGVtcGxlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzA3MzExOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Yogyakarta Culture"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative px-4 h-full flex items-center">
        <div className="w-full">
          <h2 className="text-2xl mb-2 text-amber-900">
            Oleh-Oleh Khas<br/>Yogyakarta
          </h2>
          <p className="text-sm mb-4 text-amber-800">
            Temukan produk khas Jogja berkualitas
          </p>
          <a
            href="#products"
            className="inline-block px-6 py-2.5 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700 transition-colors"
          >
            Belanja Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}