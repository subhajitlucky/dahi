import React from 'react';
import '../styles/Recipe.css';

const recipeStats = [
  { label: 'Prep window', value: '25 minutes' },
  { label: 'Ferment', value: '8–12 hours' },
  { label: 'Target pH', value: '4.5 ± 0.1' },
];

const ingredients = [
  '1 litre full-fat A2 or grass-fed cow milk',
  '2 tbsp room-temperature starter culture (alive & active)',
  'Filtered water bath or thermos sleeve (optional)',
  'Pinch of jaggery or palm sugar for sweeter finish (optional)',
];

const equipment = [
  'Heavy-bottom pot or Dutch oven',
  'Instant-read thermometer (or tactile heat check)',
  'Sterilised glass or clay fermentation vessel',
  'Breathable cover: muslin, butter muslin, or paper towel',
  'Cool pack or insulated box for warm climates',
];

const fermentationSteps = [
  {
    title: 'Reset the milk proteins',
    timing: '10 minutes',
    detail:
      'Warm milk gently to 85°C to denature whey proteins and keep the set satin-smooth. Stir occasionally to prevent scorching.',
    cue: 'Tiny bubbles ring the pot and the aroma smells caramelised but never burnt.',
  },
  {
    title: 'Cool with intention',
    timing: '15 minutes',
    detail:
      'Remove from heat. Cool to 42°C by placing the pot in a water bath or letting ambient air do the work. Skim any skin for a lighter mouthfeel.',
    cue: 'When you can keep a clean finger in for 6 seconds, the culture is safe to enter.',
  },
  {
    title: 'Inoculate the culture',
    timing: '2 minutes',
    detail:
      'Whisk starter with a ladle of tempered milk until silky, then fold back into the pot with slow figure-eight motions. Avoid frothing.',
    cue: 'The emulsion looks glossy and uniform, no streaks of starter remain.',
  },
  {
    title: 'Set & protect',
    timing: '8–12 hours',
    detail:
      'Pour into the vessel, cover, and incubate undisturbed. Aim for 40–43°C for the first 4 hours, then allow a gentle decline to room temperature.',
    cue: 'A light jiggle reveals a custard-like tremble with clear whey beading at the edges.',
  },
  {
    title: 'Chill & cure',
    timing: '2 hours',
    detail:
      'Refrigerate uncovered for 30 minutes, then seal to prevent condensation. Allow at least 90 minutes of chill to lock the set.',
    cue: 'Surface becomes satin-smooth, aroma stays softly tangy.',
  },
];

const qualityChecks = [
  {
    title: 'Texture audit',
    insight:
      'Tilt the jar 45°. If curd clings with a slow wave and whey stays transparent, you nailed the heat curve.',
  },
  {
    title: 'Aroma profile',
    insight:
      'Healthy batches smell gently lactic with a whisper of caramel. Sharp or yeasty notes mean the starter needs renewal.',
  },
  {
    title: 'Starter rotation',
    insight:
      'Reserve 2 tablespoons from each batch. Refresh every 5 days or whenever viscosity weakens.',
  },
];

const troubleshooting = [
  {
    issue: 'Runny or separated curd',
    fix:
      'Verify the heating peak reached 85°C and the incubation never dipped below 38°C. Wrap the vessel in a cotton towel in cooler weather.',
  },
  {
    issue: 'Sour bite too sharp',
    fix:
      'Shorten ferment time or chill earlier. Blend in 1 tbsp fresh milk before serving to soften acidity without diluting cultures.',
  },
  {
    issue: 'Stale starter',
    fix:
      'Retire starters that smell yeasty or look pink. Inoculate with a fresh live culture and rebuild over two successive batches.',
  },
];

const finishingTouches = [
  'Whisk in powdered jaggery and green cardamom for a classic mishti profile.',
  'Drizzle cold-pressed sesame oil with toasted cumin for savoury lunches.',
  'Serve alongside soaked millets, stewed mango, or warm khichdi for balanced macros.',
];

const Recipe = () => {
  return (
    <div className="page recipe-page">
      <section className="section-block recipe-hero">
        <div className="recipe-hero__content">
          <p className="eyebrow">Flagship recipe</p>
          <h1>Slow-cultured dahi guided by science</h1>
          <p>
            Ritual meets precision: follow the cues, trust your senses, and you&apos;ll culture a silky bowl of probiotics that stays vibrant all week.
          </p>
          <div className="recipe-hero__actions">
            <a className="btn btn--primary" href="/science">Understand the microbiome</a>
            <a className="btn btn--ghost" href="/community">Share results with the guild</a>
          </div>
          <ul className="recipe-stats">
            {recipeStats.map((stat) => (
              <li key={stat.label}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe-hero__media">
          <div className="hero-placeholder">
            <span>Image placeholder: freshly cultured dahi resting in a clay handi.</span>
          </div>
          <div className="hero-note">
            <h3>Fermentation climate note</h3>
            <p>
              Ideal ambient temperature is 24–27°C. If your kitchen runs cooler, park the jar in your oven with the light on or inside an insulated lunchbox.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block recipe-basics">
        <div className="section-heading">
          <h2>Set up your mise en place</h2>
          <p>Lay out every component before you start—sterility and steady heat are the foundations of a dependable culture.</p>
        </div>
        <div className="recipe-basics__grid">
          <article className="recipe-basics__card">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="recipe-basics__card">
            <h3>Equipment</h3>
            <ul>
              {equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-block recipe-steps">
        <div className="section-heading">
          <h2>Fermentation choreography</h2>
          <p>Move intentionally through each phase. The combination of time, temperature, and calm hands keeps your microbiome diverse.</p>
        </div>
        <div className="step-grid">
          {fermentationSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <header>
                <span className="step-card__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <span className="step-card__timing">{step.timing}</span>
                </div>
              </header>
              <p>{step.detail}</p>
              <p className="step-card__cue"><strong>Sensory cue:</strong> {step.cue}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block recipe-quality">
        <div className="section-heading">
          <h2>Quality guardrails</h2>
          <p>Audit the batch with these micro-checks. They keep your culture thriving from one generation to the next.</p>
        </div>
        <div className="quality-grid">
          {qualityChecks.map((check) => (
            <article className="quality-card" key={check.title}>
              <h3>{check.title}</h3>
              <p>{check.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block recipe-troubleshooting">
        <div className="section-heading">
          <h2>Troubleshooting clinic</h2>
          <p>Culture misbehaving? Diagnose fast and restore balance without sacrificing flavour or safety.</p>
        </div>
        <div className="troubleshooting-grid">
          {troubleshooting.map((item) => (
            <article className="troubleshooting-card" key={item.issue}>
              <h3>{item.issue}</h3>
              <p>{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block recipe-finish">
        <div className="recipe-finish__grid">
          <div>
            <h2>Finishing rituals</h2>
            <ul>
              {finishingTouches.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-finish__cta">
            <h3>Log every batch</h3>
            <p>
              Note date, milk source, ambient temperature, and tasting notes. Patterns emerge quickly and help you iterate like a pro.
            </p>
            <a className="btn btn--primary" href="mailto:lab@superdahi.co">Submit your fermentation log</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipe;