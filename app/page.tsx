import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-soft-gray)] py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-heading font-bold text-[var(--color-primary)]">
            KSP CU Sinar Sejahtera
          </h1>
          <p className="text-xl text-[var(--color-medium-gray)]">
            SMART — Sejahtera, Mandiri, Amanah, Responsif, dan Terpercaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Design System Test</CardTitle>
              <CardDescription>Testing our custom components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="test-input">Test Input</Label>
                <Input id="test-input" placeholder="Enter text..." />
              </div>
              <div className="flex gap-2">
                <Button variant="primary" size="md">Primary</Button>
                <Button variant="secondary" size="md">Secondary</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simpanan</CardTitle>
              <CardDescription>Bunga hingga 7%</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-medium-gray)]">
                Berbagai pilihan produk simpanan untuk kebutuhan Anda
              </p>
              <Button variant="primary" size="md" className="mt-4 w-full">
                Lihat Produk
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pinjaman</CardTitle>
              <CardDescription>Mulai dari 1%</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-medium-gray)]">
                Solusi pinjaman untuk produktif dan konsumtif
              </p>
              <Button variant="secondary" size="md" className="mt-4 w-full">
                Hitung Pinjaman
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading font-bold">Button Variants</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="sm">Small Secondary</Button>
            <Button variant="secondary" size="md">Medium Secondary</Button>
            <Button variant="secondary" size="lg">Large Secondary</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" size="sm">Small Ghost</Button>
            <Button variant="ghost" size="md">Medium Ghost</Button>
            <Button variant="ghost" size="lg">Large Ghost</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
