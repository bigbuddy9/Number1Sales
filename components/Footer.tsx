import Image from "next/image";
import iconImg from "@/ScaleSolarIcon.png";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container-x py-10 flex flex-col items-center gap-4 text-center text-sm text-muted">
        <Image
          src={iconImg}
          alt={site.brand}
          className="h-12 w-12 rounded-md"
          priority={false}
        />
        <span>{site.footer.line}</span>
      </div>
    </footer>
  );
}
