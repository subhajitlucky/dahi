import React from 'react';
import '../styles/Tips.css';

const Tips = () => {
  return (
    <div className="page">
      <div className="tips-section full-width">
        <div className="container">
          <h1>Storage Tips & FAQ</h1>
          <p>Best practices for storing dahi and answers to common questions.</p>
          
          <section className="tips-section">
          <h2>Storage Tips</h2>
          <h3>Proper Storage</h3>
          <ul>
            <li>Store dahi in the refrigerator at 4°C (39°F) or below</li>
            <li>Keep it in clean, airtight containers to prevent contamination</li>
            <li>Use clean, dry spoons when serving to avoid introducing harmful bacteria</li>
            <li>Consume within 5-7 days for optimal probiotic benefits</li>
          </ul>
          
          <h3>Maintaining Your Culture</h3>
          <ul>
            <li>Save 2-3 tablespoons of each batch as starter for the next</li>
            <li>Use your culture within 7 days for best results</li>
            <li>Never use dahi that has developed mold as a starter</li>
            <li>Label and date your starter to track freshness</li>
          </ul>
          
          <h2>Frequently Asked Questions</h2>
          <div className="faq-section">
            <h3>How much dahi should I consume daily?</h3>
            <p>A serving of 100-150 grams (about 1/2 to 3/4 cup) daily is generally sufficient to provide beneficial probiotics.</p>
            
            <h3>Can I make dahi from plant-based milk?</h3>
            <p>Yes, but the bacterial cultures may differ. Soy, almond, and coconut milk can be used with specific starter cultures designed for plant-based milks.</p>
            
            <h3>Is homemade dahi better than store-bought?</h3>
            <p>Homemade dahi often has more diverse and active bacterial cultures since commercial versions may have fewer strains or inactive cultures. However, proper technique is crucial for safety.</p>
            
            <h3>What if my dahi doesn't set?</h3>
            <p>This can happen due to incorrect temperature, poor starter culture, or contamination. Ensure your milk is heated to the right temperature and cooled before adding the starter.</p>
            
            <h3>Can I freeze dahi?</h3>
            <p>Freezing will kill most beneficial bacteria, so it's not recommended if you're seeking probiotic benefits. However, frozen dahi can still be used in cooked dishes.</p>
            
            <h3>How do I know if my dahi has good bacteria?</h3>
            <p>Good dahi should have a pleasant sour smell, firm texture, and slightly tangy taste. If it has an off-putting smell, unusual color, or mold, discard it immediately.</p>
          </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tips;