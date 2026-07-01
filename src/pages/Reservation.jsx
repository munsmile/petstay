import PageHero from '../components/PageHero.jsx';
import { reservationRules, site } from '../data/siteData.js';

export default function Reservation() {
  return (
    <>
      <PageHero eyebrow="RESERVATION" title="예약안내" subtitle="Reservation Guide" image="/images/hero-03.jpg" />
      <section className="section narrow">
        <span className="eyebrow centered">GUIDE</span>
        <h2 className="centered">예약 전 확인해주세요</h2>
        <div className="rule-list">
          {reservationRules.map((rule, i) => <div key={rule}><b>{String(i + 1).padStart(2, '0')}</b><p>{rule}</p></div>)}
        </div>
        <div className="reservation-box">
          <h3>실시간 예약</h3>
          <p>객실 가능 여부와 정확한 요금은 실시간 예약 페이지에서 확인해 주세요.</p>
          <a className="primary-button" href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약 바로가기</a>
        </div>
      </section>
    </>
  );
}
