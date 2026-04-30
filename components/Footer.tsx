import Image from "next/image";
import logoImg from "@/ScaleSolarLogo.png";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container-x py-10 flex flex-col items-center gap-4 text-center text-sm text-muted">
        <Image
          src={logoImg}
          alt={site.brand}
          className="h-auto w-full max-w-[180px] md:max-w-[220px]"
          priority={false}
        />
        <span>{site.footer.line}</span>
      </div>
    </footer>
  );
}
