import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="page">
      <section className="hero full-width">
        <div className="container">
          <div className="hero-image">
            [PLACEHOLDER: Traditional Dahi Making Image]
          </div>
          <h1>Welcome to Super Dahi</h1>
          <p>Discover the ancient wisdom of fermentation and the power of beneficial bacteria for healthy longevity.</p>
          <p className="sanskrit-quote">"आयुर्वेदो ऽस्ति भेषजं यत्र तत्र न रोगभाक्" - Where there is Ayurveda, there is no disease</p>
        </div>
      </section>
      
      <section className="content-section full-width">
        <div className="container">
          <div className="image-container">
            <div className="image-placeholder">
              [PLACEHOLDER: Healthy Longevity Image]
            </div>
          </div>
          <h2>The Science of Healthy Longevity</h2>
          <p>Research suggests that populations with the longest healthy lifespans often share a common element: traditional fermented foods rich in beneficial bacteria. Our mission is to explore and share these beneficial cultures for better health.</p>
          
          <h2>Why Dahi?</h2>
          <p>Dahi (yogurt) contains probiotics - beneficial bacteria that support digestive health, boost immunity, and may contribute to longevity. Traditional dahi preparation methods often preserve the most beneficial bacterial strains.</p>
          
          <div className="cta-section">
            <h3>Start Your Journey</h3>
            <p>Learn how to make the most beneficial dahi at home with our simple recipe and scientific insights.</p>
            <div className="button-group">
              <a href="/recipe" className="btn primary-btn">Try Our Recipe</a>
              <a href="/science" className="btn secondary-btn">Learn the Science</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;