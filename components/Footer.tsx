import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container-x py-10 flex flex-col items-center gap-4 text-center text-sm text-muted">
        <Image
          src="/icon.png"
          alt={site.brand}
          width={1254}
          height={1254}
          className="h-10 w-10 rounded-md"
        />
        <span>{site.footer.line}</span>
      </div>
    </footer>
  );
}
