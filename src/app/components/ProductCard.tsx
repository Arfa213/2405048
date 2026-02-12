import { ShoppingCart, Plus } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden border-amber-100">
      <div className="relative aspect-square overflow-hidden bg-amber-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-amber-600 text-white text-[10px] px-2 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <CardContent className="p-3">
        <h3 className="text-sm mb-1 text-amber-900 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-amber-600 mb-2 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-amber-900">
            Rp {(product.price / 1000).toFixed(0)}K
          </span>
          <Button
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 h-8 px-3 text-xs"
            onClick={() => onAddToCart(product)}
          >
            <Plus className="h-3 w-3 mr-1" />
            Tambah
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}