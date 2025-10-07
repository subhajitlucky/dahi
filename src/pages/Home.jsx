import React from 'react';
import '../styles/Home.css';

const benefits = [
  {
    id: 1,
    title: 'Living cultures, never powders',
    description:
      'We nurture wild strains through clay vessels, gentle warmth, and patient timing so every spoonful is alive with diverse probiotics.',
  },
  {
    id: 2,
    title: 'Mindful nourishment ritual',
    description:
      'Align daily servings with Ayurvedic circadian wisdom—midday cooling, evening soothing—to calm digestion and steady energy.',
  },
  {
    id: 3,
    title: 'Heritage meets modern science',
    description:
      'We translate grandmothers’ wisdom into precise temperatures, timings, and lab-backed insights for confident home fermentation.',
  },
];

const longevityPillars = [
  {
    id: 1,
    label: 'Sourcing',
    copy: 'Begin with full-bodied A2 milk and a spoon of heirloom starter kept within the community for generations.',
  },
  {
    id: 2,
    label: 'Fermentation',
    copy: 'Hold at a steady 42°C for 8–12 hours. The culture listens to warmth, patience, and the vessel you choose.',
  },
  {
    id: 3,
    label: 'Serving',
    copy: 'Pair with toasted spices or soaked millets. Keep your gut ecology nourished with daily, mindful portions.',
  },
];

const Home = () => {
  return (
    <div className="page home-page">
      <section className="section-block home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Super Dahi</p>
          <h1>Microbial wisdom for modern longevity</h1>
          <p>
            Rediscover slow fermentation as a daily ritual. We blend Ayurvedic intuition with microbiome science so you can cultivate restorative, silky dahi in your own kitchen.
          </p>
          <div className="home-hero__actions">
            <a className="btn btn--primary" href="/recipe">Brew your first batch</a>
            <a className="btn btn--ghost" href="/science">Trace the science</a>
          </div>
          <ul className="home-hero__stats">
            <li>
              <span className="value">12 hrs</span>
              <span className="label">Slow set ritual</span>
            </li>
            <li>
              <span className="value">4.5 pH</span>
              <span className="label">Balanced tang</span>
            </li>
            <li>
              <span className="value">∞ care</span>
              <span className="label">Starter stewardship</span>
            </li>
          </ul>
        </div>
        <div className="home-hero__media">
          <div className="hero-placeholder">
            <span>Image placeholder: hands whisking warm milk in a clay pot.</span>
          </div>
          <div className="hero-note">
            <h3>Fermenter’s mantra</h3>
            <p>Warmth, patience, and gratitude. Keep a log beside your pot and note how the culture responds each day.</p>
          </div>
        </div>
      </section>

      <section className="section-block home-benefits">
        <div className="section-heading">
          <h2>Why cultured dahi matters</h2>
          <p>
            Traditional fermentation builds resilience for the gut-brain axis. Our guides ensure you do it with nuance—no guesswork, just grounded practice.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block home-quote">
        <blockquote>
          <p className="quote-script">आयुर्वेदोऽस्ति भेषजं यत्र तत्र न रोगभाक्</p>
          <p className="quote-translation">“Where Ayurveda is practiced with devotion, illness has no seat.”</p>
          <footer>— Ayurvedic maxim, translated for the modern fermenter</footer>
        </blockquote>
      </section>

      <section className="section-block home-pillars">
        <div className="section-heading">
          <h2>Build your longevity ritual</h2>
          <p>
            Anchor your process in three mindful pillars. Track them daily and you’ll notice calmer digestion, richer sleep, and a brighter palate.
          </p>
        </div>
        <div className="pillar-grid">
          {longevityPillars.map((pillar) => (
            <article key={pillar.id} className="pillar-card">
              <span className="pillar-card__index">{String(pillar.id).padStart(2, '0')}</span>
              <div>
                <h3>{pillar.label}</h3>
                <p>{pillar.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block home-cta">
        <div className="home-cta__content">
          <h2>Join the Super Dahi guild</h2>
          <p>
            Step into a community of curious fermenters, clinicians, and chefs. We swap starters, track experiments, and turn everyday meals into longevity rituals.
          </p>
        </div>
        <div className="home-cta__actions">
          <a className="btn btn--primary" href="/community">Meet the community</a>
          <a className="btn btn--ghost" href="/tips">Download storage wisdom</a>
        </div>
      </section>
    </div>
  );
};

export default Home;