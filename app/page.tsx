import BitStrip from "./_components/BitStrip";
import Shot from "./_components/Shot";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import { WRAP } from "./_components/layout";

const SHOTS = [
  {
    src: "/images/shot-week.png",
    caption: "the week, seven registers",
    alt: "The week view: seven day rows stacked, each one darker than the row above, with each day's bits shown on the right.",
  },
  {
    src: "/images/shot-day.png",
    caption: "a day, open",
    alt: "A day open with its task list, each task carrying its own bit, and the day's readout below.",
  },
  {
    src: "/images/shot-widget.png",
    caption: "flip from the home screen",
    alt: "The home screen showing the medium Day widget and the large Week widget.",
  },
  {
    src: "/images/shot-source.png",
    caption: "the raw records",
    alt: "The records sheet: the week's raw stored data as read-only JSON.",
  },
];

const FEATURES = [
  {
    title: "The bit is the checkbox",
    body: "Tap the digit. It goes 0 to 1. There is no second state to learn.",
  },
  {
    title: "A day is a register",
    body: "Every task in a day, in a row, readable at a glance as one number.",
  },
  {
    title: "BIN · OCT · HEX",
    body: "Tap the readout to reread the same day in another base.",
  },
  {
    title: "Flip from the home screen",
    body: "Day and Week widgets. Check things off without opening the app.",
  },
  {
    title: "Your data, on your phone",
    body: "SQLite on device. No account, no server, no analytics.",
  },
  {
    title: "Read the raw records",
    body: "Long-press the header for the week exactly as it's stored. Nothing is hidden.",
  },
];

const NOT = [
  "no projects",
  "no tags",
  "no priorities",
  "no due dates",
  "no streaks",
  "no nagging notifications",
  'no red "overdue"',
  "no account",
  "no sync",
  "no server",
  "no tracking",
];

export default function Home() {
  return (
    <div className="flex-1">
      <SiteHeader />

      <main>
        <div className={`${WRAP} mt-14 sm:mt-22`}>
          <h1 className="font-display font-bold text-[clamp(52px,12vw,116px)] leading-[0.92] tracking-[-0.02em] m-0 mb-6">
            A task is a bit.
          </h1>
          <p className="text-[clamp(17px,2.4vw,21px)] leading-relaxed text-muted max-w-[46ch] m-0">
            Zero or one. That&rsquo;s the whole model. FlipBit is a to-do app
            for people who want the list to stay a list.
          </p>

          <div className="mt-12 sm:mt-14">
            <BitStrip />
          </div>

          <div className="mt-12 sm:mt-14">
            {/* TODO: replace with the real App Store link once it exists */}
            <a
              href="{{APP_STORE_URL}}"
              className="inline-block font-mono font-bold text-[14px] tracking-[0.08em] uppercase text-white bg-accent rounded-[10px] px-5.5 py-3.5 no-underline transition-transform duration-140 ease-bit active:scale-[0.98]"
            >
              Download on the App Store
            </a>
            <p className="font-mono text-[13px] text-muted mt-4">
              iOS · Free · No account · Works offline
            </p>
          </div>
        </div>

        <section className={`${WRAP} mt-16 sm:mt-28`} aria-label="Screenshots">
          {/* Bleeds a touch wider than the text column on desktop; scrolls
              inside its own container on mobile. */}
          {/* Scrolls inside its own container on mobile; centred as a group on
              desktop, so a missing frame doesn't leave a hole at the end. */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 sm:justify-center sm:gap-5 sm:overflow-visible">
            {SHOTS.map((shot, i) => (
              <Shot key={shot.src} {...shot} eager={i === 0} />
            ))}
          </div>
        </section>

        <section className={`${WRAP} mt-16 sm:mt-28`} aria-labelledby="features-title">
          <h2
            id="features-title"
            className="font-display font-bold text-[13px] tracking-[0.18em] uppercase text-muted m-0 mb-10"
          >
            What it does
          </h2>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <h3 className="font-mono font-bold text-[15px] m-0 mb-2.5">
                  {f.title}
                </h3>
                <p className="text-[16px] text-muted m-0">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${WRAP} mt-16 sm:mt-28`} aria-labelledby="no-title">
          <div className="bg-tile rounded-[14px] px-6 py-9 sm:px-12 sm:py-14">
            <h2
              id="no-title"
              className="font-display font-bold text-[clamp(30px,5vw,46px)] leading-none tracking-[-0.01em] m-0 mb-3"
            >
              What it doesn&rsquo;t do.
            </h2>
            <p className="text-muted max-w-[52ch] m-0 mb-8">
              The list below is the design. Each one was left out on purpose.
            </p>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {NOT.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[13px] text-muted bg-bg rounded-[10px] px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
