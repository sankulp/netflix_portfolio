import React from 'react';
import './OpenToCollaborate.css';
import { Link } from 'react-router-dom';
import { FaDatabase, FaPenFancy, FaUsers, FaArrowRight, FaLaptopCode } from 'react-icons/fa';

const OpenToCollaborate: React.FC = () => {
  return (
    <div className="collab-container">
      <div className="collab-header">
        <h2 className="collab-title">🤝 Open to Collaboration</h2>
        <p className="collab-subtitle">
          I am eager to partner with oncologists, medical researchers, clinical practitioners, and machine learning labs worldwide.
        </p>
      </div>

      <div className="collab-grid">
        <div className="collab-card">
          <h3><FaDatabase color="#e50914" /> Clinical Data Partnerships</h3>
          <p>
            Partnering with dental hospitals, cancer institutes, and pathology labs to validate deep learning models on diverse, real-world oral cancer cohorts under strict ethical and anonymization protocols.
          </p>
        </div>

        <div className="collab-card">
          <h3><FaPenFancy color="#e50914" /> Joint Research & Publishing</h3>
          <p>
            Co-authoring high-impact research manuscripts targeting leading IEEE, Springer, Nature, and Elsevier journals across healthcare AI, computer vision, and biomedical informatics.
          </p>
        </div>

        <div className="collab-card">
          <h3><FaUsers color="#e50914" /> Grant Proposals & Projects</h3>
          <p>
            Collaborating on government and institutional funded research grants (DST, ICMR, SERB, international consortiums) focusing on translational healthcare innovation.
          </p>
        </div>

        <div className="collab-card">
          <h3><FaLaptopCode color="#e50914" /> Open Source & Tooling</h3>
          <p>
            Developing reproducible medical image processing pipelines, benchmark evaluation suites, and interactive diagnostic prototype interfaces for researchers.
          </p>
        </div>
      </div>

      <div className="collab-footer-card">
        <h3>Have a research idea or project in mind?</h3>
        <p>
          Whether you are a fellow doctoral researcher, a clinical expert, or an industry investigator, I'd love to explore synergies.
        </p>
        <Link to="/contact-me" className="collab-cta-btn">
          Get in Touch <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default OpenToCollaborate;
