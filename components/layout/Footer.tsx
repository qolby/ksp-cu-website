import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold">
                KSP CU Sinar Sejahtera
              </span>
              <span className="text-sm text-[var(--color-secondary)] font-medium mt-1">
                {siteConfig.tagline}
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/keanggotaan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Keanggotaan
                </Link>
              </li>
              <li>
                <Link
                  href="/transparansi"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Transparansi
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Produk Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/layanan#simpanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Simpanan Saham
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#simpanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Simpanan Sukarela
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#simpanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Simpanan Harian
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#simpanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Simpanan Pendidikan
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#simpanan"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Simpanan Hari Raya
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#pinjaman"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Pinjaman Produktif
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#pinjaman"
                  className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                >
                  Pinjaman Konsumtif
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  {siteConfig.contact.address}
                </span>
              </li>
              {siteConfig.contact.phone !== '[TO BE PROVIDED]' && (
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              {siteConfig.contact.email !== '[TO BE PROVIDED]' && (
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-white/80 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
              {siteConfig.contact.officeHours !== '[TO BE PROVIDED]' && (
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">
                    {siteConfig.contact.officeHours}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
