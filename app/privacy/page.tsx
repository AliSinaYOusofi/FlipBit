import type { Metadata } from "next";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { WRAP } from "../_components/layout";

export const metadata: Metadata = {
  title: "Privacy — FlipBit",
  description:
    "FlipBit collects nothing. Tasks are written to a SQLite file on your device and stay there. No account, no sync, no server, no analytics.",
};

const UPDATED = "15 August 2026";

// The short version, said plainly, before any of the detail.
const SUMMARY = [
  "no account",
  "no sign-in",
  "no sync",
  "no server",
  "no analytics",
  "no tracking",
  "no ads",
  "no third-party SDKs",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-12 sm:mt-16">
      <h2
        id={id}
        className="font-display font-bold text-[13px] tracking-[0.18em] uppercase text-muted m-0 mb-4"
      >
        {title}
      </h2>
      <div className="max-w-[62ch] text-[16px] leading-relaxed [&>p]:m-0 [&>p+p]:mt-4">
        {children}
      </div>
    </section>
  );
}

export default function Privacy() {
  return (
    <div className="flex-1">
      <SiteHeader />

      <main className={`${WRAP} mt-14 sm:mt-22`}>
        <h1 className="font-display font-bold text-[clamp(40px,9vw,84px)] leading-[0.95] tracking-[-0.02em] m-0 mb-6">
          Privacy.
        </h1>
        <p className="text-[clamp(17px,2.4vw,21px)] leading-relaxed text-muted max-w-[46ch] m-0">
          FlipBit collects nothing. You write a task, it goes into a file on
          your phone, and that is where it stays.
        </p>

        <ul className="flex flex-wrap gap-2.5 list-none p-0 mt-10">
          {SUMMARY.map((item) => (
            <li
              key={item}
              className="font-mono text-[13px] text-muted bg-tile rounded-[10px] px-3 py-2"
            >
              {item}
            </li>
          ))}
        </ul>

        <Section id="what-we-collect" title="What we collect">
          <p>
            Nothing. There is no analytics package in the app, no crash
            reporter, no advertising identifier, and no third-party SDK of any
            kind. The app has no code that sends your tasks anywhere, because
            there is nowhere for them to be sent.
          </p>
        </Section>

        <Section id="where-your-tasks-live" title="Where your tasks live">
          <p>
            Your tasks, the days they belong to, and whether each bit is 0 or 1
            are written to a SQLite database inside the app&rsquo;s own storage
            on your device. That file is covered by iOS app sandboxing: other
            apps cannot read it.
          </p>
          <p>
            You can see exactly what is stored at any time. Long-press the
            header to open the records sheet, which shows the raw week as it
            sits on disk. Nothing is kept that isn&rsquo;t shown there.
          </p>
        </Section>

        <Section id="no-account" title="No account">
          <p>
            There is no sign-up, no login, no email address, and no profile.
            FlipBit never asks who you are, so it has no way to know.
          </p>
        </Section>

        <Section id="no-network" title="No network, no sync">
          <p>
            The app works offline because it only ever works offline. It does
            not sync between devices, and there is no FlipBit server to sync
            with. Your tasks exist on one phone.
          </p>
          <p>
            This cuts both ways, and it&rsquo;s worth saying out loud: because
            nothing is stored anywhere else, a lost or wiped phone means lost
            tasks.
          </p>
        </Section>

        <Section id="backups" title="Device backups">
          <p>
            If you have iCloud Backup or encrypted local backups turned on in
            iOS, your device backup may include FlipBit&rsquo;s database along
            with the rest of your apps. That is iOS doing what you asked it to,
            not FlipBit syncing. It is governed by Apple&rsquo;s privacy policy,
            and you control it in Settings.
          </p>
        </Section>

        <Section id="widgets" title="Widgets">
          <p>
            The Day and Week widgets read the same on-device database and write
            back to it when you flip a bit from the home screen. They send
            nothing anywhere either.
          </p>
        </Section>

        <Section id="permissions" title="Permissions and notifications">
          <p>
            FlipBit does not ask for your location, contacts, camera,
            microphone, photos, or health data. It sends no notifications, so it
            never asks permission to.
          </p>
        </Section>

        <Section id="deleting" title="Deleting your data">
          <p>
            Delete a task and it is gone from the database. Delete the app and
            iOS removes its storage, database included. There is no copy
            elsewhere to request, export, or ask us to erase, because no copy
            was ever made.
          </p>
        </Section>

        <Section id="app-store" title="The App Store">
          <p>
            Downloads and any crash reports you choose to share with developers
            are handled by Apple under Apple&rsquo;s own terms, before FlipBit
            is involved. Those reports contain diagnostic information, never
            your tasks. You can turn sharing off in Settings under Privacy
            &amp; Security.
          </p>
        </Section>

        <Section id="this-site" title="This website">
          <p>
            This page loads no tracking scripts, no third-party embeds, and no
            cookies. Fonts are served from this domain rather than fetched from
            Google, so visiting doesn&rsquo;t hand your address to anyone else.
          </p>
          <p>
            The host that serves the site keeps standard access logs, including
            IP addresses, as any web server does. Those logs are the host&rsquo;s
            and are used to serve the page.
            {/* TODO: name the host once deployment is settled, e.g.
                "The site is hosted on Vercel; see their privacy policy." */}
          </p>
        </Section>

        <Section id="children" title="Children">
          <p>
            FlipBit collects no personal information from anyone, of any age.
          </p>
        </Section>

        <Section id="changes" title="Changes">
          <p>
            If this policy changes, the date below changes with it. Any version
            that starts collecting something would say so here first, in plain
            words.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Questions about this policy can go to{" "}
            {/* TODO: replace with the contact address you want published */}
            <a href="mailto:senayousofiali@gmail.com" className="underline">
              {"senayousofiali@gmail.com"}
            </a>
            .
          </p>
        </Section>

        <p className="font-mono text-[13px] text-muted mt-16">
          last updated {UPDATED}
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
