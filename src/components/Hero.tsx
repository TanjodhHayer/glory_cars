import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">KEEP LIFE MOVING</p>
          <h1>
            The repair you need.
            <br />
            <span>A way forward.</span>
          </h1>
          <p className="lead">
            Unexpected repairs shouldn’t put everything on hold. Explore vehicle
            repair financing with Glory Auto Hub and your repair shop.
          </p>
          <div className="actions">
            <Link className="button" href="/contactCustomer">
              Ask about financing <ArrowUpRight size={18} />
            </Link>
            <a className="text-link" href="#for-shops">
              I’m a repair shop ↗
            </a>
          </div>
          <p className="fine-print">
            Financing is subject to review and approval. Available terms are
            provided before you agree.
          </p>
        </div>
        <div className="hero-visual">
          <Image
            src="/mechanic.png"
            alt="Automotive service professional at work"
            fill
            preload
            sizes="(max-width: 800px) 100vw, 48vw"
            className="hero-photo"
          />
          <div className="photo-caption">
            <span className="caption-dot" />
            <span>
              From the repair bay
              <br />
              <strong>back to your everyday.</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
