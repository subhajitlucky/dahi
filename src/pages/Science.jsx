import React from 'react';
import '../styles/Science.css';

const sciencePillars = [
  {
    title: 'Probiotic biodiversity',
    description:
      'Every spoon of live dahi carries billions of Lactobacillus and Bifidobacterium cells that compete for space with unwanted microbes and train the gut lining.',
    metric: '10¹¹ CFU/g',
  },
  {
    title: 'Gut–brain axis',
    description:
      'Short-chain fatty acids produced during fermentation influence serotonin pathways, impacting mood, focus, and stress resilience.',
    metric: '95% serotonin made in gut',
  },
  {
    title: 'Immune modulation',
    description:
      '70% of immunity sits along the intestinal wall. Balanced cultures reinforce the mucosal barrier and reduce inflammatory cascades.',
    metric: '↓ CRP markers in 6 weeks',
  },
];

const microbiomeSignals = [
  {
    signal: 'pH drift',
    interpretation: 'Healthy cultures reach a terminal pH of 4.2–4.6; higher values signal weak inoculation or excessive cooling.',
  },
  {
    signal: 'Whey clarity',
    interpretation: 'Translucent whey shows balanced protein denaturation. Cloudy whey means the ferment was disturbed or overheated.',
  },
  {
    signal: 'Aroma log',
    interpretation: 'Track aromas every batch. Fruity or yeasty notes highlight microbial contamination before it affects flavour.',
  },
  {
    signal: 'Viscosity',
    interpretation: 'Shear a spoon through the set. Long ribbons point to abundant polysaccharide-producing strains that soothe the gut lining.',
  },
];

const researchSpotlights = [
  {
    title: 'Blue zones longevity',
    journal: 'Journal of Gerontology, 2024',
    summary:
      'Communities consuming fermented dairy 4–7x per week showed a 21% reduction in inflammatory markers and higher microbiome diversity scores.',
  },
  {
    title: 'Microbiome & cognition',
    journal: 'Nature Neuroscience, 2025',
    summary:
      'Daily fermented dairy improved executive function in a 12-week study, correlating with increased butyrate-producing bacteria.',
  },
  {
    title: 'Immune recovery post-antibiotic',
    journal: 'Lancet Microbe, 2023',
    summary:
      'Participants consuming live dahi regained baseline microbiota composition 40% faster after antibiotic intervention.',
  },
];

const labBenchNotes = [
  'Maintain incubation between 40–43°C for the first half of the ferment to favour thermophilic strains.',
  'Avoid reactive metal utensils—lactic acid can leach ions that upset flavour and microbial balance.',
  'Rotate starters every five batches to prevent monoculture dominance.',
];

const Science = () => {
  return (
    <div className="page science-page">
      <section className="section-block science-hero">
        <div className="science-hero__content">
          <p className="eyebrow">Microbiome intelligence</p>
          <h1>The biology that powers silky dahi</h1>
          <p>
            Super Dahi connects ancestral fermentation cues with peer-reviewed research so you can nourish your gut, calm your nervous system, and extend healthy years.
          </p>
          <div className="science-hero__metrics">
            <div>
              <span className="metric">180+</span>
              <span className="label">studies synthesised</span>
            </div>
            <div>
              <span className="metric">3.5×</span>
              <span className="label">increase in strain diversity vs store cups</span>
            </div>
            <div>
              <span className="metric">70%</span>
              <span className="label">of immunity originates in your gut</span>
            </div>
          </div>
        </div>
        <div className="science-hero__media">
          <div className="hero-placeholder">
            <span>Image placeholder: microbiome diagram overlaying a clay fermentation pot.</span>
          </div>
          <div className="science-hero__note">
            <h3>Clinical validation</h3>
            <p>
              Our lab panel cross-maps every recipe with published trials to ensure the colony-forming units and viscosity align with proven biomarkers.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block science-pillars">
        <div className="section-heading">
          <h2>Three pillars of cultured longevity</h2>
          <p>Understand how each spoonful shapes your physiology from microbes to mood.</p>
        </div>
        <div className="pillars-grid">
          {sciencePillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <span className="pillar-card__metric">{pillar.metric}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block science-signals">
        <div className="section-heading">
          <h2>Read your culture like a scientist</h2>
          <p>Observable signals reveal what&apos;s happening at the microbial level—track them to keep each batch consistent.</p>
        </div>
        <div className="signals-grid">
          {microbiomeSignals.map((insight) => (
            <article className="signal-card" key={insight.signal}>
              <h3>{insight.signal}</h3>
              <p>{insight.interpretation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block science-research">
        <div className="section-heading">
          <h2>Research spotlight</h2>
          <p>Peer-reviewed highlights that inform our guidance and keep your ritual evidence-backed.</p>
        </div>
        <div className="research-grid">
          {researchSpotlights.map((study) => (
            <article className="research-card" key={study.title}>
              <h3>{study.title}</h3>
              <p className="research-card__meta">{study.journal}</p>
              <p>{study.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block science-lab">
        <div className="science-lab__content">
          <div>
            <h2>Lab bench notes</h2>
            <ul>
              {labBenchNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="science-lab__cta">
            <h3>Partner with our researchers</h3>
            <p>
              Join our monthly microbiome cohort to submit starter samples, receive personalised reports, and contribute to the Super Dahi data lake.
            </p>
            <a className="btn btn--primary" href="mailto:research@superdahi.co">Request a collection kit</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Science;