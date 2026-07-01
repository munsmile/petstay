import PageHero from '../components/PageHero.jsx';
import ImageBox from '../components/ImageBox.jsx';
import { rooms, site } from '../data/siteData.js';

export default function Room({ id }) {
  const room = rooms.find((r) => r.id === id) || rooms[0];
  return (
    <>
      <PageHero eyebrow="ROOM" title={room.name} subtitle={room.en} image={room.image} />
      <section className="section room-detail">
        <div className="room-head">
          <span className="eyebrow">{room.en}</span>
          <h2>{room.name}</h2>
          <p>{room.summary}</p>
        </div>
        <div className="gallery-grid">
          {room.gallery.map((src, i) => <ImageBox key={src} src={src} alt={`${room.name} 이미지 ${i + 1}`} />)}
        </div>
        <div className="detail-grid">
          <div className="detail-box"><b>이용인원</b><span>{room.people}</span></div>
          <div className="detail-box"><b>입퇴실</b><span>{room.check}</span></div>
          <div className="detail-box"><b>추가요금</b><span>기준 인원 초과 시 1인 20,000원</span></div>
        </div>
        <div className="option-box">
          <h3>객실정보</h3>
          <ul>{room.options.map((op) => <li key={op}>{op}</li>)}</ul>
          <a className="primary-button" href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>
        </div>
      </section>
    </>
  );
}
