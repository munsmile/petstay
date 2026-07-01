import { CalendarDays, Phone } from 'lucide-react';
import { site } from '../data/siteData.js';

export default function FloatingButtons() {
  return (
    <div className="floating">
      <a href={`tel:${site.phone.replaceAll('-', '')}`} aria-label="전화"><Phone size={18} /></a>
      <a href={site.reservationUrl} target="_blank" rel="noreferrer" aria-label="예약"><CalendarDays size={18} /></a>
    </div>
  );
}
