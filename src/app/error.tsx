"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="shell section error-page">
      <p className="eyebrow">SOMETHING WENT WRONG</p>
      <h1>Let’s try that again.</h1>
      <p className="lead">
        We couldn’t load this page. Try again, or return to the home page.
      </p>
      <div className="actions">
        <button className="button" onClick={reset}>
          Try again
        </button>
        <Link className="text-link" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
