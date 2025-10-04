import React from 'react';
import '../styles/Science.css';

const Science = () => {
  return (
    <div className="page">
      <div className="science-section full-width">
        <div className="container">
          <div className="image-container">
            <div className="image-placeholder">
              [PLACEHOLDER: Probiotics Science Image]
            </div>
          </div>
          
          <h1>The Science Behind Beneficial Bacteria</h1>
          <p>Understanding how gut bacteria contribute to health and longevity.</p>
          
          <section className="science-section">
          <h2>What Are Probiotics?</h2>
          <p>Probiotics are live microorganisms that, when consumed in adequate amounts, confer health benefits to the host. In dahi, these include beneficial bacteria like Lactobacillus and Bifidobacterium strains.</p>
          
          <h2>Gut-Brain Connection</h2>
          <p>Your gut microbiome, often called your "second brain," communicates directly with your central nervous system. Beneficial bacteria in dahi can influence mood, cognition, and overall mental health.</p>
          
          <h2>Immune System Benefits</h2>
          <p>Approximately 70% of your immune system is located in your gut. Beneficial bacteria help maintain immune balance and protect against harmful pathogens.</p>
          
          <div className="image-container">
            <div className="image-placeholder">
              [PLACEHOLDER: Longevity and Health Image]
            </div>
          </div>
          
          <h2>Longevity and Health</h2>
          <p>Populations with the highest concentration of healthy centenarians often have diets rich in fermented foods. These foods provide beneficial bacteria that may contribute to both longevity and quality of life in old age.</p>
          
          <h2>Metabolic Benefits</h2>
          <p>Beneficial bacteria aid in digestion and help break down nutrients that would otherwise be unavailable to the human body. They also produce certain vitamins like B12 and K.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Science;