import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50 pb-20">
      <div className="px-4 py-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-amber-400" />
            <h3 className="text-base">Oleh-Oleh Jogja</h3>
          </div>
          <p className="text-amber-200 text-xs leading-relaxed max-w-xs mx-auto">
            Menyediakan produk oleh-oleh khas Yogyakarta berkualitas tinggi
          </p>
        </div>

        <div className="space-y-3 text-xs mb-6">
          <div className="flex items-center justify-center gap-2 text-amber-200">
            <MapPin className="h-4 w-4" />
            <span>Jl. Malioboro No. 123, Yogyakarta</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-amber-200">
            <Phone className="h-4 w-4" />
            <span>+62 274 123456</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-amber-200">
            <Mail className="h-4 w-4" />
            <span>info@olehojehjogja.com</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-amber-200 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-amber-200 hover:text-white transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-amber-200 hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        <div className="border-t border-amber-800 pt-4 text-center text-xs text-amber-200">
          <p>&copy; 2026 Oleh-Oleh Jogja</p>
        </div>
      </div>
    </footer>
  );
}