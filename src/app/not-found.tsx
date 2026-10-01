import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="wrap py-[clamp(5rem,12vw,10rem)] text-center grid gap-5 justify-items-center">
      <span className="label">404</span>
      <h1 className="display text-h-lg">
        That page has <em>grown out.</em>
      </h1>
      <p className="text-stone max-w-[46ch]">The link you followed doesn’t exist any more. Head back to the homepage or get in touch.</p>
      <Link href="/" className="btn">
        Back to home <ArrowIcon />
      </Link>
    </section>
  );
}
