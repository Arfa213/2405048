import { ShoppingCart, Menu, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-600" />
            <div>
              <h1 className="text-base text-amber-900">Oleh-Oleh Jogja</h1>
              <p className="text-[10px] text-amber-600">Khas Yogyakarta</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}