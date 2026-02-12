import { Card, CardContent } from "./ui/card";
import { User, MapPin, Phone, Mail, Heart, Clock, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

export function ProfileSection() {
  return (
    <section className="py-6 bg-gradient-to-b from-amber-50 to-white pb-20">
      <div className="px-4">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <User className="h-10 w-10 text-amber-600" />
          </div>
          <h2 className="text-lg text-amber-900 mb-1">Pengguna Tamu</h2>
          <p className="text-xs text-amber-600">guest@olehoeh.com</p>
        </div>

        <div className="space-y-3 mb-6">
          <Card className="border-amber-100">
            <CardContent className="p-4">
              <button className="w-full flex items-center gap-3">
                <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm text-amber-900">Riwayat Pesanan</h4>
                  <p className="text-xs text-amber-600">Lihat pesanan Anda</p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-4">
              <button className="w-full flex items-center gap-3">
                <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm text-amber-900">Favorit</h4>
                  <p className="text-xs text-amber-600">Produk yang Anda suka</p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-4">
              <button className="w-full flex items-center gap-3">
                <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm text-amber-900">Alamat Pengiriman</h4>
                  <p className="text-xs text-amber-600">Atur alamat Anda</p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="border-amber-100">
            <CardContent className="p-4">
              <button className="w-full flex items-center gap-3">
                <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-sm text-amber-900">Metode Pembayaran</h4>
                  <p className="text-xs text-amber-600">Kelola pembayaran</p>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-50 rounded-lg p-5 mb-6">
          <h3 className="text-sm text-amber-900 mb-3">Hubungi Kami</h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center gap-2 text-amber-700">
              <MapPin className="h-4 w-4" />
              <span>Jl. Malioboro No. 123, Yogyakarta</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Phone className="h-4 w-4" />
              <span>+62 274 123456</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Mail className="h-4 w-4" />
              <span>info@olehojehjogja.com</span>
            </div>
          </div>
        </div>

        <Button className="w-full bg-amber-600 hover:bg-amber-700">
          Masuk / Daftar
        </Button>
      </div>
    </section>
  );
}
