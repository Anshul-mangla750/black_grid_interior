import { stats } from '../data/projects';

const StatsMarquee = () => {
  const items = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="marquee-wrapper">
      <div className="marquee-track">
        {items.map((stat, i) => (
          <div key={i} className="marquee-item">
            <span>{stat.number}</span>
            <span style={{ fontWeight: 400, fontSize: 'clamp(0.75rem, 1vw, 0.9rem)', letterSpacing: '0.1em' }}>
              {stat.label}
            </span>
            <div className="separator" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsMarquee;
