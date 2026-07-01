import PageHero from '../components/PageHero.jsx';
import ImageBox from '../components/ImageBox.jsx';
import { facilities, site } from '../data/siteData.js';

export default function Facility({ id }) {
  const item = facilities.find((f) => f.id === id) || facilities[0];
  return (
    <>
      <PageHero eyebrow="FACILITY" title={item.title} subtitle={item.en} image={item.image} />
      <section className="section two-col facility-detail">
        <ImageBox src={item.image} alt={item.title} />
        <div>
          <span className="eyebrow">{item.en}</span>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <ul className="check-list">{item.notes.map((note) => <li key={note}>{note}</li>)}</ul>
          <a className="primary-button" href={site.reservationUrl} target="_blank" rel="noreferrer">실시간예약</a>
        </div>
      </section>
    </>
  );
}
