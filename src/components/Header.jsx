import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '../data/siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = window.location.pathname;

  return (
    <header className="header">
      <a href="/" className="logo" aria-label="펫스테이1455 홈">
        <span>{site.enName}</span>
        <small>{site.name}</small>
      </a>

      <nav className="desktop-nav">
        {nav.map((item) => (
          <div className="nav-item" key={item.label}>
            <a className={pathname === item.path ? 'active' : ''} href={item.path}>{item.label}</a>
            {item.children && (
              <div className="dropdown">
                {item.children.map((child) => <a key={child.path} href={child.path}>{child.label}</a>)}
              </div>
            )}
          </div>
        ))}
      </nav>

      <a className="reserve-link" href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>

      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="메뉴 열기">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="mobile-nav">
          {nav.map((item) => (
            <div key={item.label} className="mobile-group">
              <a href={item.path}>{item.label}</a>
              {item.children?.map((child) => <a className="sub" key={child.path} href={child.path}>{child.label}</a>)}
            </div>
          ))}
          <a className="mobile-reserve" href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>
        </div>
      )}
    </header>
  );
}
