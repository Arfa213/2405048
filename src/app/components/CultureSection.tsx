import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Landmark, Music, Palette, UtensilsCrossed } from "lucide-react";

export function CultureSection() {
  const culturalHighlights = [
    {
      icon: Landmark,
      title: "Candi Prambanan",
      description: "Kompleks candi Hindu terbesar di Indonesia"
    },
    {
      icon: Palette,
      title: "Seni Batik",
      description: "Warisan budaya UNESCO dengan motif klasik"
    },
    {
      icon: Music,
      title: "Wayang Kulit",
      description: "Pertunjukan seni tradisional"
    },
    {
      icon: UtensilsCrossed,
      title: "Kuliner Khas",
      description: "Gudeg, bakpia, dan makanan tradisional"
    }
  ];

  return (
    <section id="culture" className="py-8 bg-white pb-20">
      <div className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl mb-2 text-amber-900">Budaya Yogyakarta</h2>
          <p className="text-sm text-amber-600">
            Kekayaan budaya dan tradisi
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg mb-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689443440850-de2e425740cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZb2d5YWthcnRhJTIwSW5kb25lc2lhJTIwdGVtcGxlJTIwY3VsdHVyZXxlbnwxfHx8fDE3NzA3MzExOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Yogyakarta Temple"
            className="w-full h-[200px] object-cover"
          />
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-base text-amber-900">Kota Istimewa dengan Warisan Budaya</h3>
          <p className="text-sm text-amber-700 leading-relaxed">
            Yogyakarta adalah pusat kebudayaan Jawa yang masih mempertahankan tradisi keraton. Kota ini menjadi tempat lahirnya berbagai kerajinan tangan berkualitas tinggi dan kuliner legendaris.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {culturalHighlights.map((item, index) => (
            <Card key={index} className="border-amber-100">
              <CardContent className="p-4">
                <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-amber-600" />
                </div>
                <h4 className="text-sm mb-1 text-amber-900">{item.title}</h4>
                <p className="text-xs text-amber-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-5">
          <div className="space-y-4">
            <h3 className="text-base text-amber-900">Pasar Tradisional</h3>
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545105580-06fbbf96241e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBtYXJrZXR8ZW58MXx8fHwxNzcwNzMxMTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional Market"
                className="w-full h-[160px] object-cover"
              />
            </div>
            <p className="text-sm text-amber-700 leading-relaxed">
              Pasar Beringharjo menjadi jantung ekonomi dan budaya kota. Kami bermitra langsung dengan pengrajin lokal untuk memastikan kualitas tinggi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}