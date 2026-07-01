export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ '--bg': `url(${image || '/images/hero-01.jpg'})` }}>
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
