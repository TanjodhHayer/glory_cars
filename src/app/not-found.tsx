import Link from "next/link";
import { PORTAL_URL } from "@/lib/site";
export default function NotFound() {
  return (
    <section className="shell section error-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p className="lead">
        This page may have moved. Visit our home page or sign in to your shop
        account.
      </p>
      <div className="actions">
        <Link className="button" href="/">
          Back to home
        </Link>
        <a className="text-link" href={PORTAL_URL + "/login"}>
          Shop login ↗
        </a>
      </div>
    </section>
  );
}
