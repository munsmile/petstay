import PageHero from '../components/PageHero.jsx';
import ImageBox from '../components/ImageBox.jsx';
import { travel } from '../data/siteData.js';

export default function Travel() {
  return (
    <>
      <PageHero eyebrow="TRAVEL" title="주변여행지" subtitle="Gyeongju Travel" image="/images/travel-hero.jpg" />
      <section className="section">
        <span className="eyebrow centered">NEARBY</span>
        <h2 className="centered">경주의 여행지를 함께 둘러보세요</h2>
        <div className="card-grid three">
          {travel.map((t) => (
            <article className="travel-card" key={t.title}>
              <ImageBox src={t.image} alt={t.title} />
              <div><h3>{t.title}</h3><p>{t.distance}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
