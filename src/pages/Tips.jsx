import React from 'react';
import '../styles/Tips.css';

const storageGuidelines = [
  {
    id: 1,
    title: 'Temperature discipline',
    details: 'Keep fresh dahi at 4°C (39°F) in the coldest shelf—not the door. Temperature swings dull probiotic vitality.',
  },
  {
    id: 2,
    title: 'Contact matters',
    details: 'Use clean, dry spoons and glass or ceramic containers. Metal ladles can introduce off-flavours and destabilise the set.',
  },
  {
    id: 3,
    title: 'Starter stewardship',
    details: 'Reserve 2 tablespoons from each batch, label with date, and renew every 5–7 days to keep cultures lively.',
  },
  {
    id: 4,
    title: 'Breathing space',
    details: 'Allow a centimetre of headroom in jars. A gentle oxygen buffer prevents condensation from diluting the texture.',
  },
];

const careChecklist = {
  dos: [
    'Heat milk to 85°C (185°F) before cooling and culturing—it resets protein structure for a creamy set.',
    'Cool milk to 42°C (107°F) before adding starter; this is the sweet spot for lactobacillus activity.',
    'Stir set dahi once, then leave it untouched. The structure forms best without repeated agitation.',
    'Log aroma, texture, and tang every batch. Small notes reveal how your culture prefers to live.',
  ],
  donts: [
    'Don’t reuse starter that smells yeasty, looks pink, or shows mold—retire it immediately.',
    'Avoid plastic tubs long-term; micro-scratches harbour unwanted microbes.',
    'Never freeze starter for daily use—thawing damages bacterial diversity and weakens subsequent batches.',
    'Resist microwaving to warm chilled dahi; instead, temper it in a warm water bath for 5 minutes.',
  ],
};

const faqs = [
  {
    question: 'How much dahi should I enjoy each day?',
    answer:
      'For gut support, 100–150 g (roughly ½ to ¾ cup) alongside a meal is sufficient. Pair it with warm grains or lightly spiced vegetables for better assimilation.',
  },
  {
    question: 'Can I culture plant-based milk?',
    answer:
      'Yes—look for vegan-specific starter blends. Soy and coconut milks set well; boost structure with a teaspoon of tapioca starch and ferment for 10–12 hours.',
  },
  {
    question: 'Why choose homemade over store-bought?',
    answer:
      'Homemade dahi preserves multiple live strains, while ultra-pasteurised store cups often contain only two. When you manage the process, you own the biodiversity.',
  },
  {
    question: 'What if my batch stays runny?',
    answer:
      'Check three levers: starter freshness, incubation temperature, and vessel insulation. Reheat the milk to 85°C, cool precisely, and wrap the pot in a cotton towel next time.',
  },
  {
    question: 'Is freezing an option for backup cultures?',
    answer:
      'Freezing reduces probiotic potency by 60–80%. If you must, freeze only for cooking use—keep a live starter in the refrigerator for ongoing batches.',
  },
  {
    question: 'How do I assess bacterial health?',
    answer:
      'Healthy dahi smells gently tangy, has a satin surface, and releases clear whey. Any sharp odour, discoloration, or fuzz means it’s time to compost the batch and refresh your starter.',
  },
];

const Tips = () => {
  return (
    <div className="page tips-page">
      <section className="section-block tips-hero">
        <p className="eyebrow">Storage & care</p>
        <h1>Keep your cultures potent and safe</h1>
        <p>
          A mindful storage ritual protects the probiotics you worked hard to cultivate. Follow these clinical yet compassionate guardrails to extend your starter’s life.
        </p>
        <div className="tips-hero__tags">
          <span>Temperature</span>
          <span>Hygiene</span>
          <span>Starter renewal</span>
          <span>Serving ritual</span>
        </div>
      </section>

      <section className="section-block tips-storage">
        <div className="section-heading">
          <h2>Daily storage guardrails</h2>
          <p>Short, consistent actions keep microbial colonies flourishing while warding off contaminants.</p>
        </div>
        <div className="storage-grid">
          {storageGuidelines.map((item) => (
            <article key={item.id} className="storage-card">
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block tips-checklist">
        <div className="checklist-grid">
          <div className="checklist-card checklist-card--do">
            <h3>Rituals to keep</h3>
            <ul>
              {careChecklist.dos.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="checklist-card checklist-card--dont">
            <h3>Practices to retire</h3>
            <ul>
              {careChecklist.donts.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block tips-faq">
        <div className="section-heading">
          <h2>Professional FAQ</h2>
          <p>Answers validated by our microbiologists and ancestral kitchen mentors.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.question} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block tips-contact">
        <div className="tips-contact__card">
          <h3>Need a culture audit?</h3>
          <p>
            Share a quick starter history with <a href="mailto:care@superdahi.co">care@superdahi.co</a>. Our lab team reviews photos, pH readings, and storage notes to recommend the next best steps.
          </p>
          <ul>
            <li>24-hour response on weekdays</li>
            <li>Personalised starter rehab plan</li>
            <li>Optional lab test kits for stubborn issues</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Tips;