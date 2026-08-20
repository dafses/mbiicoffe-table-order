import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Coffee,
  MapPin,
  Phone,
  Instagram,
  Clock,
  MessageCircle,
  Star,
  Menu,
  X,
  ChevronRight,
  Utensils,
  CupSoda,
  Croissant,
  Store,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import heroCoffee from "@/assets/hero-coffee.jpg";
import aboutCoffee from "@/assets/about-coffee.jpg";
import menuSignature from "@/assets/menu-signature.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuToast from "@/assets/menu-toast.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mbiicoffe — Teman Setia di Setiap Sruputan" },
      {
        name: "description",
        content:
          "Mbiicoffe adalah ruang santai untuk menikmati kopi lokal berkualitas dan jajanan ringan. Pesan langsung dari meja kamu.",
      },
      { property: "og:title", content: "Mbiicoffe — Teman Setia di Setiap Sruputan" },
      {
        property: "og:description",
        content:
          "Ruang santai untuk menikmati kopi lokal berkualitas dan jajanan ringan yang bikin nagih.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const whatsappNumber = "6282111777237";

function getWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#locations" },
  { label: "Testimoni", href: "#testimonials" },
];

const coffeeMenu = [
  {
    name: "Kopi Susu Mbi",
    description: "Signature kami, perpaduan kopi, susu, dan gula aren.",
    price: "Rp 22.000",
    badge: "Signature",
    image: menuSignature,
  },
  {
    name: "Espresso / Americano",
    description: "Untuk kamu yang ingin rasa kopi murni.",
    price: "Rp 18.000",
    badge: "Klasik",
    image: menuLatte,
  },
  {
    name: "Latte",
    description: "Lembut dan menenangkan.",
    price: "Rp 24.000",
    badge: "Favorit",
    image: menuLatte,
  },
];

const snackMenu = [
  {
    name: "Roti Bakar",
    description: "Pilihan rasa Cokelat Keju, Srikaya, atau Telur Kornet.",
    price: "Rp 18.000",
    badge: "Best Seller",
    image: menuToast,
  },
  {
    name: "Kentang Goreng Crispy",
    description: "Gurih dan renyah, cocok jadi teman ngopi.",
    price: "Rp 20.000",
    badge: "Cemilan",
    image: menuToast,
  },
  {
    name: "Pisang Goreng Madu",
    description: "Manis legit dengan sentuhan madu alami.",
    price: "Rp 16.000",
    badge: "Manis",
    image: menuToast,
  },
];

const locations = [
  {
    city: "Bogor",
    address: "Jl. Jend. Sudirman No. 123, Bogor Tengah.",
  },
  {
    city: "Semarang",
    address: "Jl. Pandanaran No. 45, Semarang Pusat.",
  },
  {
    city: "Jakarta",
    address: "Jl. Senopati No. 8, Kebayoran Baru, Jakarta Selatan.",
  },
];

const testimonials = [
  {
    text: "Kopi Susu Mbi-nya juara banget! Tempatnya juga nyaman banget buat nugas.",
    author: "Andi, Bogor",
  },
  {
    text: "Roti bakarnya garing dan toppingnya melimpah. Bakal jadi tempat favorit baru di Semarang!",
    author: "Sari, Semarang",
  },
  {
    text: "Suasananya tenang, cocok banget buat meeting santai. Kopinya enak!",
    author: "Budi, Jakarta",
  },
];

function TableOrderDialog({ children }: { children: React.ReactNode }) {
  const [tableNumber, setTableNumber] = useState("");
  const [location, setLocation] = useState("Bogor");
  const [open, setOpen] = useState(false);

  const handleOrder = () => {
    const table = tableNumber.trim() || "-";
    const message = `Halo Mbiicoffe! Saya ingin memesan dari meja *${table}* di cabang *${location}*. Mohon dibantu menu dan cara pemesanannya. Terima kasih!`;
    window.open(getWhatsAppUrl(message), "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">Pesan dari Meja</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Masukkan nomor meja dan cabang, lalu kami akan menghubungkan kamu ke WhatsApp Mbiicoffe.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium text-foreground">
              Cabang
            </label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="location" className="border-input bg-background">
                <SelectValue placeholder="Pilih cabang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bogor">Bogor</SelectItem>
                <SelectItem value="Semarang">Semarang</SelectItem>
                <SelectItem value="Jakarta">Jakarta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="table" className="text-sm font-medium text-foreground">
              Nomor Meja
            </label>
            <Input
              id="table"
              placeholder="Contoh: 12"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="border-input bg-background"
            />
          </div>
          <Button
            onClick={handleOrder}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <Coffee className="h-7 w-7 text-primary" />
          <span className="font-serif text-xl font-bold tracking-tight">Mbiicoffe</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <TableOrderDialog>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <MessageCircle className="h-4 w-4" />
              Pesan dari Meja
            </Button>
          </TableOrderDialog>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <TableOrderDialog>
              <Button className="mt-2 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="h-4 w-4" />
                Pesan dari Meja
              </Button>
            </TableOrderDialog>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 max-w-2xl lg:order-1">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 bg-secondary text-secondary-foreground"
          >
            <Store className="h-3.5 w-3.5" />
            Kopi Lokal, Cita Rasa Hangat
          </Badge>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Teman Setia di Setiap Sruputan.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ruang santai untuk kamu menikmati kopi lokal berkualitas dan jajanan ringan yang bikin
            nagih.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Lihat Menu
                <ChevronRight className="h-4 w-4" />
              </Button>
            </a>
            <a
              href={getWhatsAppUrl("Halo Mbiicoffe! Saya ingin bertanya tentang menu dan pemesanan.")}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-input text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Hubungi Kami via WA
              </Button>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
            <img
              src={heroCoffee}
              alt="Interior hangat Mbiicoffe dengan secangkir kopi di meja kayu"
              width={1440}
              height={960}
              className="relative rounded-2xl border border-border shadow-xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-bl from-primary/10 to-accent/10 blur-2xl" />
          <img
            src={aboutCoffee}
            alt="Biji kopi pilihan dan barista menuangkan susu ke dalam kopi"
            width={960}
            height={960}
            className="relative rounded-2xl border border-border shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="order-1 lg:order-2">
          <Badge
            variant="outline"
            className="mb-4 border-border text-foreground"
          >
            Tentang Kami
          </Badge>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Lebih dari Sekadar Secangkir Kopi
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Mbiicoffe hadir sebagai oase bagi para pecinta kopi. Kami percaya bahwa kopi bukan
            sekadar minuman, tapi teman terbaik untuk bekerja, berbincang, atau sekadar melepas
            penat. Dengan biji kopi pilihan dan suasana yang <em>homey</em>, Mbiicoffe siap menemani
            harimu.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-5">
              <Coffee className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                Biji Kopi Pilihan
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Dipilih dari petani lokal terbaik untuk rasa yang konsisten.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <Utensils className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
                Jajanan Ringan
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Teman sempurna untuk menemani setiap tegukan kopi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border text-foreground"
          >
            Menu Kami
          </Badge>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Kopi Pilihan & Jajanan Ringan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Semua dibuat dengan bahan berkualitas dan penuh perhatian, biar setiap kunjungan kamu
            terasa spesial.
          </p>
        </div>

        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <CupSoda className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">Kopi Pilihan</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coffeeMenu.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-4 flex items-center gap-2">
            <Croissant className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">Jajanan Ringan</h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {snackMenu.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
}: {
  item: {
    name: string;
    description: string;
    price: string;
    badge: string;
    image: string;
  };
}) {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          width={816}
          height={816}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">{item.badge}</Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-serif text-xl text-card-foreground">{item.name}</CardTitle>
          <span className="whitespace-nowrap font-semibold text-primary">{item.price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function LocationsSection() {
  return (
    <section id="locations" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border text-foreground"
          >
            Lokasi Kami
          </Badge>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Tiga Kota, Satu Rasa Hangat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mbiicoffe hadir di Bogor, Semarang, dan Jakarta. Temukan cabang terdekat dan mampir ya!
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Card
              key={loc.city}
              className="border-border bg-background transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground">{loc.city}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{loc.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `Mbiicoffe ${loc.address}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Lihat di Google Maps
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-4 border-border text-foreground"
          >
            Testimoni
          </Badge>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Apa Kata Mereka?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.author}
              className="relative border-border bg-card text-card-foreground"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg italic leading-relaxed text-foreground">“{t.text}”</p>
                <p className="mt-6 font-medium text-muted-foreground">— {t.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-foreground">
              <Coffee className="h-7 w-7 text-primary" />
              <span className="font-serif text-2xl font-bold">Mbiicoffe</span>
            </div>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Teman setia di setiap sruputan. Kopi lokal berkualitas, suasana homey, dan pelayanan
              yang hangat.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground">Kontak</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <a
                    href={getWhatsAppUrl("Halo Mbiicoffe!")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    082111777237
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/mbiicoffe"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    @mbiicoffe
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Setiap Hari, 09.00 - 22.00
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground">Navigasi</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">Pesan dari Meja</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Duduk di Mbiicoffe? Pesan langsung dari meja kamu tanpa antre.
            </p>
            <TableOrderDialog>
              <Button className="mt-4 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageCircle className="h-4 w-4" />
                Pesan Sekarang
              </Button>
            </TableOrderDialog>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mbiicoffe. Dibuat dengan hangat untuk para pecinta kopi.
        </div>
      </div>
    </footer>
  );
}

function FloatingTableButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <TableOrderDialog>
        <Button
          size="lg"
          className="gap-2 rounded-full bg-primary px-6 text-primary-foreground shadow-lg hover:bg-primary/90"
        >
          <MessageCircle className="h-5 w-5" />
          Pesan dari Meja
        </Button>
      </TableOrderDialog>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <LocationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingTableButton />
    </div>
  );
}
