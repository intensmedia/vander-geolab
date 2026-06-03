import Image from "next/image";

import {
  BriefcaseBusiness,
  Clock3,
  FileText,
  FlaskConical,
  Globe2,
  MessageCircle,
  Network,
  ShieldCheck,
  ThumbsUp,
  Users,
} from "lucide-react";

import { VglButton } from "@/components/ui/vgl-button";
import { cn } from "@/lib/utils";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type TrustItem = {
  label: string;
  icon: IconType;
};

type StatisticItem = {
  value: string;
  label: string;
  icon: IconType;
};

const trustItems: TrustItem[] = [
  { label: "Akurat & Terpercaya", icon: ShieldCheck },
  { label: "Standar Internasional", icon: Globe2 },
  { label: "Turnaround Cepat", icon: Clock3 },
  { label: "Layanan Terintegrasi", icon: Network },
];

const statisticItems: StatisticItem[] = [
  { value: "10+", label: "Tahun Pengalaman", icon: FlaskConical },
  { value: "2.500+", label: "Proyek Selesai", icon: BriefcaseBusiness },
  { value: "1.000+", label: "Klien Terpercaya", icon: Users },
  { value: "98%", label: "Kepuasan Klien", icon: ThumbsUp },
];

const companyLogos = [
  "adaro",
  "PT FREEPORT INDONESIA",
  "VALE",
  "Bukit Asam",
  "BUMA",
  "WIKA",
  "INDONESIA POWER",
  "HUAYOU",
];

function HeroCta({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <div
      className={cn(
        "[&_[data-slot=button]]:h-12 [&_[data-slot=button]]:w-full [&_[data-slot=button]]:rounded-md [&_[data-slot=button]]:px-5 [&_[data-slot=button]]:text-sm [&_[data-slot=button]]:font-bold [&_[data-slot=button]]:shadow-none sm:[&_[data-slot=button]]:w-auto",
        variant === "primary"
          ? "[&_[data-slot=button]]:bg-[#009c3b] [&_[data-slot=button]]:text-white [&_[data-slot=button]]:hover:bg-[#008b35]"
          : "[&_[data-slot=button]]:border-[#001f4f]/35 [&_[data-slot=button]]:bg-white [&_[data-slot=button]]:text-[#001f4f] [&_[data-slot=button]]:hover:border-[#001f4f] [&_[data-slot=button]]:hover:bg-[#f5f8fb]"
      )}
    >
      <VglButton>{children}</VglButton>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-white text-[#001f4f]">
      <div className="relative min-h-[840px] overflow-hidden bg-[#e7eef5] md:min-h-[760px] lg:min-h-[540px]">
        <Image
          src="/image/homepage/herosection.png"
          alt="Laboratorium pengujian Vander Geo Laboratory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0.58)_51%,rgba(255,255,255,0.12)_76%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0)_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-[840px] w-full max-w-[1280px] flex-col justify-center px-4 pb-[250px] pt-10 sm:px-6 md:min-h-[760px] md:pb-[220px] lg:min-h-[540px] lg:px-8 lg:pb-[126px] lg:pt-10">
          <div className="max-w-[555px]">
            <p className="text-xs font-extrabold uppercase tracking-normal text-[#008533] md:text-sm">
              Laboratorium Lingkungan & Geoteknik
            </p>

            <h1 className="mt-4 text-[32px] font-extrabold leading-[1.13] tracking-normal text-[#001f4f] sm:text-[40px] md:text-[46px] lg:text-[46px]">
              Solusi Pengujian Terintegrasi untuk Industri Tambang & Infrastruktur
            </h1>

            <p className="mt-4 max-w-[510px] text-sm font-semibold leading-7 text-[#001f4f]/85 md:text-[15px]">
              Akurasi tinggi, turnaround cepat, dan standar internasional untuk
              mendukung kepatuhan, keberlanjutan & efisiensi proyek Anda.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 lg:max-w-[555px]">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="flex items-center gap-3" key={item.label}>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#001f4f]/20 bg-white text-[#001f4f]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-xs font-bold leading-tight text-[#001f4f]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroCta>
                <MessageCircle aria-hidden="true" className="size-4" />
                Konsultasi Sekarang
              </HeroCta>
              <HeroCta variant="outline">
                <FileText aria-hidden="true" className="size-4" />
                Company Profile
              </HeroCta>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-20 px-4 sm:px-6 md:bottom-10 lg:bottom-8 lg:px-8">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="grid w-full grid-cols-2 overflow-hidden rounded-md bg-[#001f4f] text-white shadow-[0_18px_42px_rgba(0,31,79,0.22)] sm:grid-cols-4 lg:ml-auto lg:max-w-[760px]">
              {statisticItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className={cn(
                      "flex min-h-[82px] items-center gap-3 px-4 py-4",
                      index > 0 && "sm:border-l sm:border-white/15",
                      index % 2 === 1 && "border-l border-white/15 sm:border-l"
                    )}
                    key={item.label}
                  >
                    <Icon aria-hidden="true" className="size-7 shrink-0 text-white/90" />
                    <div>
                      <div className="text-xl font-extrabold leading-none md:text-2xl">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[11px] font-medium leading-tight text-white/85">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#e4eaf3] bg-[#fbfdff]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-9">
          <div className="max-w-[210px] text-xs font-extrabold leading-snug text-[#008533]">
            Dipercaya oleh perusahaan terkemuka
          </div>

          <div className="grid flex-1 grid-cols-2 items-center gap-x-10 gap-y-7 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-8">
            {companyLogos.map((company) => (
              <div
                className="flex min-h-12 items-center justify-center text-center text-[12px] font-extrabold leading-tight text-[#001f4f]/80 grayscale transition hover:text-[#001f4f] hover:grayscale-0"
                key={company}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
