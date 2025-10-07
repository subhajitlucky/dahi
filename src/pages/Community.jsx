import React from 'react';
import '../styles/Community.css';

const communityStories = [
  {
    id: 1,
    name: 'Ravi Sharma',
    location: 'Mumbai',
    practice: '6 months of mindful fermentation',
    quote:
      "My digestion changed completely once I began small-batch fermenting at home. A single bowl of fresh dahi at breakfast keeps my energy balanced all day.",
  },
  {
    id: 2,
    name: 'Priya Nair',
    location: 'Kochi',
    practice: 'Family tradition revived',
    quote:
      'I followed my ammachi’s clay-pot ritual with nutmeg leaves. Now my children request their probiotic dessert before school.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad',
    practice: 'Winter resilience project',
    quote:
      'During the harsh cold months, our immunity circle swore by evening dahi with jaggery chips. We sailed through the season without a single sick day.',
  },
  {
    id: 4,
    name: 'Dr. Meera Joshi',
    location: 'Pune',
    practice: 'Clinical gut health program',
    quote:
      'My patients track their starter cultures like they would a yoga practice. Consistency and warmth—both literal and emotional—are what make the culture thrive.',
  },
];

const communityInitiatives = [
  {
    id: 1,
    title: 'Fermentation Circles',
    cadence: 'First Saturday · Online & local pods',
    description:
      'Hands-on sessions guided by nutritionists and heritage cooks. We ritualize preparation, discuss seasonal tweaks, and leave with a weekly action plan.',
  },
  {
    id: 2,
    title: 'Starter Stewardship Guild',
    cadence: 'Bi-weekly · Slack workspace',
    description:
      'A moderated channel to swap cultures, troubleshoot texture, and archive tried-and-true starter revival stories from the community.',
  },
  {
    id: 3,
    title: 'Culture Field Notes',
    cadence: 'Monthly · Downloadable journal',
    description:
      'Printable tasting cards, hydration trackers, and mindful prompts to help you record ferment temperatures, moods, and gut responses.',
  },
];

const communityResources = [
  {
    id: 1,
    label: 'Newsletter',
    title: 'Cultured Living Digest',
    summary: 'Seasonal fermentation scripts, science-backed pointers, and interviews with makers preserving regional starter lineages.',
  },
  {
    id: 2,
    label: 'Library',
    title: 'Heritage Recipe Vault',
    summary: 'Curated PDFs and annotated scans from family notebooks contributed by members across India, updated quarterly.',
  },
  {
    id: 3,
    label: 'Support',
    title: 'Slack Concierge Hours',
    summary: 'Live office hours every Wednesday where mentors answer questions, review fermentation logs, and co-create troubleshooting plans.',
  },
];

const Community = () => {
  return (
    <div className="page community-page">
      <section className="section-block community-hero">
        <p className="eyebrow">Community</p>
        <h1>Where heritage fermenters meet modern wellness</h1>
        <p className="hero-intro">
          We gather nutritionists, home makers, chefs, and wellness seekers who believe mindful fermentation can transform daily life. Every story shared keeps the culture alive.
        </p>
        <div className="community-cta">
          <a className="btn btn--primary" href="mailto:hello@superdahi.co">Request a seat at the next circle</a>
          <a className="btn btn--ghost" href="#guild">Explore our guild pillars</a>
        </div>

        <div className="community-metrics">
          <div className="metric-card">
            <span className="metric-card__value">2.4k+</span>
            <span className="metric-card__label">Active makers</span>
          </div>
          <div className="metric-card">
            <span className="metric-card__value">38</span>
            <span className="metric-card__label">City circles</span>
          </div>
          <div className="metric-card">
            <span className="metric-card__value">92%</span>
            <span className="metric-card__label">Report calmer digestion</span>
          </div>
        </div>
      </section>

      <section className="section-block stories" id="stories">
        <div className="section-heading">
          <h2>Stories from our makers</h2>
          <p>
            Each circle begins with a story. These vignettes highlight the daily rituals and quiet wins our members experience by returning to slow fermentation.
          </p>
        </div>
        <div className="story-grid">
          {communityStories.map((story) => (
            <article key={story.id} className="story-card">
              <p className="story-quote">“{story.quote}”</p>
              <div className="story-meta">
                <div>
                  <h3>{story.name}</h3>
                  <p>{story.location}</p>
                </div>
                <span>{story.practice}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block community-guild" id="guild">
        <div className="section-heading">
          <h2>The Super Dahi guild</h2>
          <p>
            We pair expert guidance with generous peer support. Join the ritual that fits your schedule and experience level—every initiative is crafted to be welcoming and actionable.
          </p>
        </div>

        <div className="initiative-grid">
          {communityInitiatives.map((item) => (
            <article key={item.id} className="initiative-card">
              <span className="initiative-card__eyebrow">{item.cadence}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="community-contact">
          <div className="contact-card">
            <h3>How to join us</h3>
            <p>
              Send a brief introduction about your fermentation practice to <a href="mailto:hello@superdahi.co">hello@superdahi.co</a>.
              We’ll match you with the next circle, share starter care guides, and invite you to the Slack guild.
            </p>
            <ul>
              <li>Monthly welcome orientation on Zoom</li>
              <li>Starter swap calendar with verified hosts</li>
              <li>Personalized gut health check-in after 30 days</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block community-resources">
        <div className="section-heading">
          <h2>Resources to keep your cultures thriving</h2>
          <p>
            Stay inspired between gatherings with curated notes, research, and support. Everything is crafted to bridge ancient intuition with contemporary science.
          </p>
        </div>

        <div className="resource-grid">
          {communityResources.map((resource) => (
            <article key={resource.id} className="resource-card">
              <span className="resource-card__label">{resource.label}</span>
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Community;