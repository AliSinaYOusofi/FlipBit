"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption: string;
  eager?: boolean;
};

export default function Shot({ src, alt, caption, eager = false }: Props) {
  // The images carry their own device frame with transparent corners, so they
  // sit straight on the page — no tile behind them, no border, no shadow.
  // A file that isn't there drops out entirely rather than leaving an empty
  // slot or a broken-image icon.
  const [missing, setMissing] = useState(false);

  if (missing) return null;

  return (
    <figure className="m-0 shrink-0 basis-[62%] snap-start sm:basis-auto sm:shrink sm:grow sm:max-w-60">
      <Image
        src={src}
        alt={alt}
        width={1350}
        height={2760}
        // The slot is ~62vw on the mobile carousel and never wider than
        // 240px on desktop; without this the optimizer serves for the
        // intrinsic width and the frames render soft on retina screens.
        sizes="(max-width: 640px) 62vw, 240px"
        loading={eager ? "eager" : "lazy"}
        onError={() => setMissing(true)}
        className="block w-full h-auto max-w-full"
      />
      <figcaption className="font-mono text-[13px] text-muted mt-3.5">
        {caption}
      </figcaption>
    </figure>
  );
}
