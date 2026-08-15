"use client";

import { useState } from "react";

// Starts part-way through a real day rather than as an empty control.
const INITIAL = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1];

// By base, ascending. Decimal is deliberately excluded: it produces a number
// that can be mistaken for a count of tasks.
const NOTATIONS = [
  { tag: "BIN", base: 2 },
  { tag: "OCT", base: 8 },
  { tag: "HEX", base: 16 },
] as const;

export default function BitStrip() {
  const [bits, setBits] = useState(INITIAL);
  const [notation, setNotation] = useState(0);

  const mode = NOTATIONS[notation];
  const value =
    mode.base === 2
      ? // Binary keeps its leading zeros: it is the strip, read straight across.
        bits.join("")
      : parseInt(bits.join(""), 2).toString(mode.base).toUpperCase();

  function flip(i: number) {
    setBits((prev) => prev.map((b, j) => (j === i ? (b ? 0 : 1) : b)));
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
        <div
          role="group"
          aria-label="Bit strip — a day of tasks"
          className="flex flex-wrap gap-2"
        >
          {bits.map((bit, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={bit === 1}
              aria-label={`Bit ${i + 1}`}
              onClick={() => flip(i)}
              className={`size-9 sm:size-[46px] rounded-[10px] font-mono font-bold text-[17px] sm:text-[19px] leading-none cursor-pointer transition-[background-color,color,transform] duration-[140ms] ease-bit active:scale-[0.94] ${
                bit ? "bg-accent text-white" : "bg-tile text-muted"
              }`}
            >
              {bit}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setNotation((n) => (n + 1) % NOTATIONS.length)}
          aria-label="Cycle notation: binary, octal, hexadecimal"
          className="flex items-center gap-3 cursor-pointer text-left"
        >
          <span className="font-mono font-bold text-[17px] sm:text-[22px] tracking-[0.02em] break-all">
            {value}
          </span>
          <span className="font-mono font-bold text-[11px] tracking-[0.14em] text-muted bg-tile rounded-md px-[7px] py-1 shrink-0">
            {mode.tag}
          </span>
        </button>
      </div>

      <p className="font-mono text-[13px] text-muted mt-5">tap a bit.</p>
    </div>
  );
}
