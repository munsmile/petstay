import { useEffect, useState } from 'react';
import { facilities, heroSlides, rooms, site } from '../data/siteData.js';
import ImageBox from '../components/ImageBox.jsx';

export default function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const slide = heroSlides[idx];

  return (
    <>
      <section className="home-hero" style={{ '--bg': `url(${slide.image})` }}>
        <div className="hero-dim" />
        <div className="hero-text">
          <p>{site.tagline}</p>
          <h1>{slide.title}</h1>
          <span>{slide.subtitle}</span>
          <div className="hero-actions">
            <a href="/rooms/a">객실보기</a>
            <a href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>
          </div>
        </div>
        <div className="slide-dots">{heroSlides.map((_, i) => <button key={i} className={i === idx ? 'on' : ''} onClick={() => setIdx(i)} />)}</div>
      </section>

      <section className="intro section two-col">
        <div>
          <span className="eyebrow">PETSTAY 1455</span>
          <h2>사랑하는 반려견과 함께하는<br />프라이빗 풀빌라</h2>
          <p>드넓은 잔디마당과 독채형 구조가 어우러진 공간입니다. 대형견까지 가능한 이곳에서 반려견과의 추억을 만들어보세요.</p>
        </div>
        <ImageBox src="/images/intro.jpg" alt="펫스테이1455 전경" />
      </section>

      <section className="section beige">
        <span className="eyebrow centered">ROOMS</span>
        <h2 className="centered">Stay in This Lovely Place</h2>
        <div className="card-grid three">
          {rooms.map((room) => (
            <a className="room-card" href={room.path} key={room.id}>
              <ImageBox src={room.image} alt={room.name} />
              <div><small>{room.en}</small><h3>{room.name}</h3><p>{room.summary}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="eyebrow centered">FACILITY</span>
        <h2 className="centered">Private Space for Pet & Family</h2>
        <div className="card-grid two">
          {facilities.map((f) => (
            <a className="facility-card" href={f.path} key={f.id}>
              <ImageBox src={f.image} alt={f.title} />
              <div><small>{f.en}</small><h3>{f.title}</h3><p>{f.body}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta">
        <p>Private Pension Petstay1455</p>
        <h2>지금 바로 예약하고 편안한 휴식을 만나보세요.</h2>
        <a href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>
      </section>
    </>
  );
}
