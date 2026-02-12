import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Product } from "./ProductCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface CartItem extends Product {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-amber-900">Keranjang Belanja</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <p className="text-amber-600 mb-2">Keranjang belanja Anda masih kosong</p>
                <Button onClick={onClose} className="bg-amber-600 hover:bg-amber-700">
                  Mulai Belanja
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-amber-100 rounded-lg">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-amber-50 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm mb-1 text-amber-900 truncate">{item.name}</h4>
                      <p className="text-amber-600 mb-2">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 border-amber-200"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 border-amber-200"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => onRemove(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-amber-100 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-amber-900">Total</span>
                  <span className="text-xl text-amber-900">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
