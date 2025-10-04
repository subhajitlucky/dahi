import React, { useState } from 'react';
import '../styles/Community.css';

const Community = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      name: "Ravi Sharma",
      location: "Mumbai",
      story: "After incorporating homemade dahi into my daily diet for 6 months, I've noticed significant improvements in my digestion and overall energy levels.",
      date: "2024-08-15"
    },
    {
      id: 2,
      name: "Priya Nair",
      location: "Kochi",
      story: "Following the traditional Kerala method my grandmother taught me, I've been making dahi for my family for 10 years. My children rarely get colds now.",
      date: "2024-07-22"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      story: "Switching to traditional dahi making enhanced my immunity during the harsh winter months. My family of 5 has stayed healthy all season.",
      date: "2024-09-03"
    }
  ]);
  
  const [newExperience, setNewExperience] = useState({ name: '', location: '', story: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExperience.name && newExperience.story) {
      setExperiences([
        ...experiences,
        {
          id: experiences.length + 1,
          name: newExperience.name,
          location: newExperience.location || 'Anonymous',
          story: newExperience.story,
          date: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewExperience({ name: '', location: '', story: '' });
    }
  };

  return (
    <div className="page">
      <div className="community-section">
        <h1>Community Corner</h1>
        <p>Share your experiences and learn from others' journeys with dahi.</p>
        
        <section className="community-section">
        <h2>Stories from Our Community</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="story-card">
            <h3>{exp.name}, {exp.location}</h3>
            <p>{exp.story}</p>
            <small>Shared on {exp.date}</small>
          </div>
        ))}
        
        <h2>Share Your Experience</h2>
        <form onSubmit={handleSubmit} className="experience-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newExperience.name}
              onChange={(e) => setNewExperience({...newExperience, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location (Optional):</label>
            <input
              type="text"
              id="location"
              value={newExperience.location}
              onChange={(e) => setNewExperience({...newExperience, location: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="story">Your Story:</label>
            <textarea
              id="story"
              value={newExperience.story}
              onChange={(e) => setNewExperience({...newExperience, story: e.target.value})}
              required
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" className="btn primary-btn">Share Experience</button>
        </form>
        
        <h2>Traditional Recipes from Our Community</h2>
        <div className="recipe-cards">
          <div className="recipe-card">
            <h3>Kerala Style Thick Dahi</h3>
            <p>By Lakshmi Nair, Thiruvananthapuram: Boil milk until reduced by 1/3, add cardamom, cool, add culture, and ferment in clay pot.</p>
          </div>
          
          <div className="recipe-card">
            <h3>Puneri Dahi</h3>
            <p>By Sanjay Joshi, Pune: Mix buffalo milk with cow milk, add jaggery while setting, ferment at slightly higher temperature for creamier texture.</p>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Community;