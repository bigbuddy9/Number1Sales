import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container-x py-10 text-center text-sm text-muted">
        {site.footer.line}
      </div>
    </footer>
  );
}
