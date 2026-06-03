"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navigationItems: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan", hasDropdown: true },
  { label: "Industri", href: "/industri", hasDropdown: true },
  { label: "Artikel & Insight", href: "/artikel" },
  { label: "Tentang Kami", href: "/tentang-kami", hasDropdown: true },
  { label: "LHU Online", href: "/lhu-online" },
];

const whatsappHref = "https://wa.me/6281150000000";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 4);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-[#e4eaf3] bg-white text-[#001f4f] transition-shadow duration-300",
        isScrolled && "shadow-[0_10px_28px_rgba(0,31,79,0.12)]"
      )}
    >
      <div className="mx-auto grid h-[68px] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 lg:h-[68px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10 lg:px-8">
        <Link
          href="/"
          aria-label="Vander Geo Laboratory"
          className="flex shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo/vander-logosamping.png"
            alt="Vander Geo Laboratory"
            width={178}
            height={54}
            priority
            className="h-[43px] w-auto lg:h-[46px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-10 items-center gap-1 whitespace-nowrap rounded-md px-3 text-[13px] font-semibold text-[#001f4f] transition",
                    "hover:bg-[#f1f5f9] hover:text-[#007a2f] focus-visible:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25",
                    item.href === "/" && "text-[#007a2f]"
                  )}
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown aria-hidden="true" className="size-3.5" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#009c3b] px-5 text-[13px] font-bold text-white shadow-[0_8px_18px_rgba(0,156,59,0.22)] transition hover:bg-[#008b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            Konsultasi Sekarang
          </Link>
          <Link
            href="/request-quotation"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#001f4f]/35 px-5 text-[13px] font-bold text-[#001f4f] transition hover:border-[#001f4f] hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25"
          >
            <FileText aria-hidden="true" className="size-4" />
            Request Quotation
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2 lg:hidden">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Konsultasi Sekarang via WhatsApp"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#009c3b] px-3 text-xs font-bold text-white shadow-[0_8px_18px_rgba(0,156,59,0.2)] transition hover:bg-[#008b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25 sm:px-4 sm:text-sm"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            <span className="hidden min-[420px]:inline">Konsultasi</span>
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-md text-[#001f4f] transition hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-[#e4eaf3] bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile navigation" className="px-4 pb-5 pt-2 sm:px-6">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center justify-between rounded-md px-2 text-sm font-semibold text-[#001f4f] transition hover:bg-[#f1f5f9] hover:text-[#007a2f] focus-visible:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown aria-hidden="true" className="size-4" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid gap-3 border-t border-[#e4eaf3] pt-4">
            <Link
              href="/request-quotation"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#001f4f]/35 px-4 text-sm font-bold text-[#001f4f] transition hover:border-[#001f4f] hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001f4f]/25"
              onClick={() => setIsOpen(false)}
            >
              <FileText aria-hidden="true" className="size-4" />
              Request Quotation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
