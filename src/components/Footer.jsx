import { site } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>{site.name}</h3>
        <p>{site.enName} · {site.tagline}</p>
      </div>
      <div className="footer-grid">
        <p><b>Tel</b><br />{site.phone}</p>
        <p><b>Address</b><br />{site.address}</p>
        <p><b>Travel</b><br /><a href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a> · <a href="/reservation">예약안내</a></p>
        <p><b>SNS</b><br /><a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></p>
      </div>
      <small>© {new Date().getFullYear()} PETSTAY1455. React renewal source.</small>
    </footer>
  );
}
