import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { CultureSection } from "./components/CultureSection";
import { ProfileSection } from "./components/ProfileSection";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { Product } from "./components/ProductCard";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success(`${product.name} ditambahkan ke keranjang`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} ditambahkan ke keranjang`);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Produk dihapus dari keranjang");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="products">
          <ProductGrid onAddToCart={handleAddToCart} />
        </div>
        
        <div id="culture">
          <CultureSection />
        </div>
        
        <div id="profile">
          <ProfileSection />
        </div>

        <Footer />
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      <Toaster position="top-center" />
    </div>
  );
}