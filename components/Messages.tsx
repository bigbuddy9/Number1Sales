import { site } from "@/lib/site";
import Screenshot from "./Screenshot";

export default function Messages() {
  const { header, intro, images } = site.messages;

  const lightboxList = images.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section className="section border-t border-border/50">
      <div className="container-x">
        <header className="prose-x text-center">
          <h2 className="h2">{header}</h2>
          <p className="mt-6 body-lg">{intro}</p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <Screenshot
              key={img.src}
              src={img.src}
              alt={img.alt}
              images={lightboxList}
              index={i}
              fit="cover"
              aspect="aspect-[9/16]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
