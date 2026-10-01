import { BIZ } from "@/data/site";
import { FacebookIcon, InstagramIcon, PinterestIcon } from "./Icons";

const items = [
  { href: BIZ.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: BIZ.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: BIZ.social.pinterest, label: "Pinterest", Icon: PinterestIcon },
];

export function Socials({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid place-items-center w-10 h-10 rounded-full border border-current opacity-80 transition-[opacity,background-color,color,border-color] duration-200 hover:opacity-100 hover:bg-terracotta hover:border-terracotta hover:text-cream"
          >
            <Icon className="w-4 h-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
