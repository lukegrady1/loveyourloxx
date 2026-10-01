import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  image: string;
  imagePosition?: string;
  center?: boolean;
  children?: ReactNode;
};

export function PageHero({ label, title, lead, image, imagePosition = "50% 50%", center, children }: Props) {
  return (
    <section className="page-hero-shade relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.38] saturate-[0.8]"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div
        className={`wrap relative z-10 grid gap-5 max-w-[820px] pt-[clamp(4rem,9vw,7.5rem)] pb-[clamp(3rem,6vw,5rem)] ${
          center ? "text-center justify-items-center" : ""
        }`}
      >
        <span className="label !text-gold">{label}</span>
        <h1 className="display text-h-xl !text-cream [&_em]:text-gold">{title}</h1>
        {lead && <p className="text-lead text-cream-2">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
