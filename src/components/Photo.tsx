import Image from "next/image";
import { PLACEHOLDERS, type PhotoSpec } from "@/lib/photos";
import { ToothIcon } from "@/components/Icon";

type PhotoProps = {
  photo: PhotoSpec;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Clases extra para el marcador (proporción visual agradable). */
  placeholderClassName?: string;
};

/**
 * Muestra la fotografía real cuando existe (PLACEHOLDERS = false)
 * o un marcador elegante, claramente reemplazable, mientras tanto.
 */
export function Photo({
  photo,
  className = "",
  imgClassName = "",
  priority,
  placeholderClassName = "",
}: PhotoProps) {
  if (PLACEHOLDERS) {
    return (
      <div
        role="img"
        aria-label={`${photo.alt} (fotografía pendiente)`}
        className={`relative overflow-hidden rounded-[1.75rem] border border-pine/10 bg-gradient-to-br from-sage via-sage to-mist ${className} ${placeholderClassName}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-pine/40">
          <ToothIcon size={44} className="opacity-70" />
          <span className="rounded-full border border-pine/15 bg-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-pine/60">
            Foto pendiente
          </span>
        </div>
        <div className="absolute inset-x-4 bottom-4">
          <p className="rounded-full bg-white/70 px-3 py-1.5 text-center text-[11px] font-medium tracking-wide text-pine/70 backdrop-blur-sm">
            {photo.caption} — reemplazar con fotografía real
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
