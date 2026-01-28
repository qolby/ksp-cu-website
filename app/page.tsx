import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Temporary content to test layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-heading font-bold text-[var(--color-primary)]">
            Wujudkan Impian Anda Bersama Koperasi Terpercaya
          </h1>
          <p className="text-xl text-[var(--color-medium-gray)] max-w-3xl mx-auto">
            SMART — Sejahtera, Mandiri, Amanah, Responsif, dan Terpercaya
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Hitung Pinjaman
            </Button>
            <Button variant="secondary" size="lg">
              Daftar Sekarang
            </Button>
          </div>
        </div>

        {/* Placeholder content */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Simpanan</CardTitle>
              <CardDescription>Bunga hingga 7%</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-medium-gray)] mb-4">
                Berbagai pilihan produk simpanan untuk kebutuhan Anda
              </p>
              <Button variant="primary" size="md" className="w-full">
                Lihat Produk Simpanan
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pinjaman</CardTitle>
              <CardDescription>Mulai dari 1%</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-medium-gray)] mb-4">
                Solusi pinjaman untuk produktif dan konsumtif
              </p>
              <Button variant="secondary" size="md" className="w-full">
                Lihat Produk Pinjaman
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
