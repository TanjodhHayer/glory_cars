import { PORTAL_URL } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <strong>GLORY AUTO HUB</strong>
            <p>
              Vehicle repair financing.
              <br />A business name operated by Glory Financial Group Inc.
            </p>
          </div>
          <div>
            <a href="mailto:support@gloryautohub.ca">support@gloryautohub.ca</a>
            <a href="tel:+16049539854">604-953-9854</a>
            <p>
              Unit 111C, 8056 King George Blvd
              <br />
              Surrey, BC V3W 5B5
            </p>
          </div>
          <nav aria-label="Footer">
            <a href={PORTAL_URL + "/about"}>About &amp; legal disclosure</a>
            <a href={PORTAL_URL + "/privacy"}>Privacy</a>
            <a href={PORTAL_URL + "/terms"}>Terms</a>
            <a href={PORTAL_URL + "/login"}>Shop login</a>
          </nav>
        </div>
        <p className="footer-bottom">
          © {new Date().getFullYear()} Glory Financial Group Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
