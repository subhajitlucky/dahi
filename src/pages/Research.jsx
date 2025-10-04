import React from 'react';
import '../styles/Research.css';

const Research = () => {
  return (
    <div className="page">
      <div className="research-section">
        <h1>Research & Studies</h1>
        <p>Scientific studies and research on the benefits of fermented foods and beneficial bacteria.</p>
        
        <section className="research-section">
        <h2>Key Research Findings</h2>
        <h3>The Blue Zones Study</h3>
        <p>Research on populations with the highest concentration of centenarians reveals that diets rich in fermented foods are a common element. These foods provide beneficial bacteria that may contribute to longevity.</p>
        
        <h3>Gut Microbiome and Health</h3>
        <p>Studies show that a diverse gut microbiome is linked to better health outcomes, reduced inflammation, and improved immune function.</p>
        
        <h3>Probiotics and Digestive Health</h3>
        <p>Multiple clinical trials have demonstrated the positive effects of probiotic consumption on digestive health, including reduction of symptoms in IBS patients.</p>
        
        <h2>Recommended Research Papers</h2>
        <ul className="research-list">
          <li>
            <strong>Longevity and Diet in Five Blue Zones</strong><br />
            <em>Journal of Gerontology</em><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Read Abstract</a>
          </li>
          <li>
            <strong>The Role of Fermented Foods in Gut Health</strong><br />
            <em>Nature Reviews Gastroenterology & Hepatology</em><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Read Abstract</a>
          </li>
          <li>
            <strong>Probiotics, Prebiotics, and Longevity: A Systematic Review</strong><br />
            <em>Nutrients Journal</em><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Read Abstract</a>
          </li>
          <li>
            <strong>Traditional Fermented Foods and Human Health</strong><br />
            <em>Annual Review of Food Science and Technology</em><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Read Abstract</a>
          </li>
          <li>
            <strong>Microbiome Diversity and Metabolic Health</strong><br />
            <em>Cell Metabolism</em><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Read Abstract</a>
          </li>
        </ul>
        
        <h2>Current Studies</h2>
        <p>Researchers around the world are continuing to investigate the connections between:</p>
        <ul>
          <li>Gut microbiome diversity and longevity</li>
          <li>Specific probiotic strains and their health benefits</li>
          <li>The role of traditional fermented foods in preventing chronic diseases</li>
          <li>How fermentation methods affect bacterial composition</li>
        </ul>
        
        <h2>Participate in Research</h2>
        <p>If you're interested in contributing to ongoing research on fermented foods and health:</p>
        <ul>
          <li>Join clinical trials in your area studying probiotics</li>
          <li>Participate in microbiome research studies</li>
          <li>Share your traditional fermentation knowledge with researchers</li>
        </ul>
        </section>
      </div>
    </div>
  );
};

export default Research;