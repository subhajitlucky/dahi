import React from 'react';
import '../styles/Recipe.css';

const Recipe = () => {
  return (
    <div className="page">
      <div className="recipe-section">
        <h1>Super Dahi Recipe</h1>
        <p>Learn how to make beneficial dahi (yogurt) at home with scientific precision to maximize the probiotic content.</p>
        
        <section>
          <h2>Ingredients</h2>
          <ul>
            <li>1 liter of whole milk (preferably from grass-fed cows)</li>
            <li>2-3 tablespoons of high-quality plain yogurt with active cultures (or a starter culture)</li>
          </ul>
          
          <div className="image-container">
            <div className="image-placeholder">
              [PLACEHOLDER: Dahi Making Process Image]
            </div>
          </div>
          
          <h2>Instructions</h2>
          <ol>
            <li>Heat the milk to 85°C (185°F) to eliminate competing bacteria, then cool to 43°C (110°F).</li>
            <li>Whisk in the starter yogurt or culture thoroughly.</li>
            <li>Pour into clean containers and maintain temperature at 43°C (110°F) for 6-8 hours.</li>
            <li>Refrigerate for at least 2 hours before serving.</li>
          </ol>
          
          <h2>Scientific Tips for Maximum Benefits</h2>
          <ul>
            <li>Maintain consistent temperature for optimal bacterial growth.</li>
            <li>Use high-quality milk from grass-fed sources for better nutrition.</li>
            <li>Longer fermentation (within limits) increases probiotic content.</li>
            <li>Save a portion of each batch as starter for the next one to maintain culture.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Recipe;