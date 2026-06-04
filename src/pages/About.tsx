import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="page-title">👋 About Sankulp</h2>
      <div className="about-card">
        <p className="about-summary">
          A doctoral researcher and AI practitioner working at the intersection of machine learning and healthcare, 
          with active research in AI-driven oral cancer detection and a broader interest in building intelligent systems across 
          clinical and medical imaging domains.
        </p>
        <p className="about-summary">
          Currently based at the Department of Computer Science & Engineering, Delhi Technological University. 
          With 6+ years of experience spanning academic teaching and technology training, 
          I am now channelling that foundation into full-time doctoral research — applying machine learning and deep learning 
          to solve real-world healthcare problems.
        </p>
        <div className="about-highlights">
          <div className="highlight-item"><span>🏛️</span> 📍  Based in New Delhi, India </div>
          <div className="highlight-item"><span>🏥</span> 🔬  Doctoral researcher by day, curious learner always</div>
          <div className="highlight-item"><span>🎓</span> 💬  Taught 200+ students, reviewed papers, and spoken at summits — still feel like I'm just getting started</div>
          <div className="highlight-item"><span>📄</span> 🌱  Early in the journey, but certain about the direction</div>
        </div>
      </div>
    </div>
  );
};

export default About;
