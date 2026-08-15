import Link from "next/link";
import { WRAP } from "./layout";

export default function SiteFooter() {
  return (
    <footer
      className={`${WRAP} font-mono text-[13px] text-muted mt-18 sm:mt-32 pt-8 pb-12`}
    >
      FlipBit ·{" "}
      <Link href="/privacy" className="no-underline hover:text-text">
        Privacy
      </Link>{" "}
      · Ali · 2026
    </footer>
  );
}
