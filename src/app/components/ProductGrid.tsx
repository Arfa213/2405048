import { useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  const products: Product[] = [
    {
      id: 1,
      name: "Batik Tulis Premium",
      price: 350000,
      image: "https://images.unsplash.com/photo-1761515315375-1315503bb3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGZhYnJpYyUyMEluZG9uZXNpYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MDczMTE5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Fashion",
      description: "Kain batik tulis asli Yogyakarta dengan motif parang klasik"
    },
    {
      id: 2,
      name: "Kerajinan Wayang Kulit",
      price: 250000,
      image: "https://images.unsplash.com/photo-1760355714419-ced046db2c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwd2F5YW5nJTIwcHVwcGV0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzcwNzMxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kerajinan",
      description: "Wayang kulit handmade dengan detail sempurna"
    },
    {
      id: 3,
      name: "Gudeg Kaleng Premium",
      price: 45000,
      image: "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwc25hY2tzfGVufDF8fHx8MTc3MDcwNzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kuliner",
      description: "Gudeg manis khas Jogja dalam kemasan praktis"
    },
    {
      id: 4,
      name: "Tas Anyaman Mendong",
      price: 125000,
      image: "https://images.unsplash.com/photo-1761517099167-98255de4fabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBjcmFmdCUyMGhhbmRpY3JhZnR8ZW58MXx8fHwxNzcwNzMxMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kerajinan",
      description: "Tas ramah lingkungan dari anyaman mendong berkualitas"
    },
    {
      id: 5,
      name: "Bakpia Pathok 25",
      price: 35000,
      image: "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwc25hY2tzfGVufDF8fHx8MTc3MDcwNzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kuliner",
      description: "Bakpia legendaris dengan berbagai varian rasa"
    },
    {
      id: 6,
      name: "Batik Cap Motif Modern",
      price: 180000,
      image: "https://images.unsplash.com/photo-1761515315375-1315503bb3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGZhYnJpYyUyMEluZG9uZXNpYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MDczMTE5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Fashion",
      description: "Batik cap dengan sentuhan desain kontemporer"
    },
    {
      id: 7,
      name: "Keripik Tempe Original",
      price: 25000,
      image: "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwc25hY2tzfGVufDF8fHx8MTc3MDcwNzMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kuliner",
      description: "Keripik tempe renyah dan gurih khas Jogja"
    },
    {
      id: 8,
      name: "Gerabah Kasongan",
      price: 85000,
      image: "https://images.unsplash.com/photo-1761517099167-98255de4fabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBjcmFmdCUyMGhhbmRpY3JhZnR8ZW58MXx8fHwxNzcwNzMxMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kerajinan",
      description: "Gerabah unik dari sentra kerajinan Kasongan"
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedCategory);

  return (
    <section id="products" className="py-8 bg-gradient-to-b from-white to-amber-50 pb-20">
      <div className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl mb-2 text-amber-900">Produk Pilihan</h2>
          <p className="text-sm text-amber-600">
            Oleh-oleh khas Yogyakarta berkualitas
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-colors ${
              selectedCategory === "all"
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setSelectedCategory("fashion")}
            className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-colors ${
              selectedCategory === "fashion"
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            Fashion
          </button>
          <button
            onClick={() => setSelectedCategory("kerajinan")}
            className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-colors ${
              selectedCategory === "kerajinan"
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            Kerajinan
          </button>
          <button
            onClick={() => setSelectedCategory("kuliner")}
            className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-colors ${
              selectedCategory === "kuliner"
                ? "bg-amber-600 text-white"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            Kuliner
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}