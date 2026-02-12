import { Home, ShoppingBag, Landmark, User } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Beranda" },
    { id: "products", icon: ShoppingBag, label: "Produk" },
    { id: "culture", icon: Landmark, label: "Budaya" },
    { id: "profile", icon: User, label: "Profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-100 z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? "text-amber-600" : "text-gray-400"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
