import React from 'react';
import '../styles/Traditional.css';

const Traditional = () => {
  return (
    <div className="page">
      <div className="traditional-section full-width">
        <div className="container">
          <div className="image-container">
            <div className="image-placeholder">
              [PLACEHOLDER: Traditional Dahi Methods Image]
            </div>
          </div>
          
          <h1>Traditional Dahi Making Methods</h1>
          <p>Various regional techniques that have preserved beneficial bacteria for generations.</p>
          
          <section className="traditional-section">
          <h2>North Indian Method</h2>
          <p>Traditionally made by heating milk until it reduces slightly, cooling it to the right temperature by touch (not too hot, not too cold), and adding a small amount of previous day's dahi. The mixture is then placed in an earthen pot or wrapped in a blanket to maintain warmth.</p>
          
          <h2>South Indian Method</h2>
          <p>Often involves using a special clay pot (matki or surahi) that helps maintain ideal temperature. The milk is boiled with spices like cardamom and saffron before adding the starter culture.</p>
          
          <h2>Gujarati Method</h2>
          <p>Known for creating thick, creamy dahi, often churned to make buttermilk (chaas) with spices. The culture is carefully maintained by saving a portion of each batch.</p>
          
          <h2>Bengali Method</h2>
          <p>Famous for sweet dahi (mishti doi) made in earthen pots, often with added jaggery or sugar. The earthen pot imparts a unique flavor and helps in bacterial fermentation.</p>
          
          <h2>Punjabi Method</h2>
          <p>Often involves creating hung dahi (thick yogurt) by straining regular dahi through muslin cloth. This concentrated form has higher bacterial content.</p>
          
          <h2>Common Elements</h2>
          <ul>
            <li>Using clay or ceramic vessels that maintain temperature naturally</li>
            <li>Temperature control without thermometers, using traditional wisdom</li>
            <li>Preserving and passing down beneficial cultures through generations</li>
            <li>Timing fermentation based on season and temperature</li>
          </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Traditional;