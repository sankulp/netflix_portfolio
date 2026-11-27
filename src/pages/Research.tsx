import React from 'react';
import './Research.css';
import { Link } from 'react-router-dom';
import { FaMicroscope, FaBrain, FaHospitalAlt, FaArrowRight, FaBookOpen } from 'react-icons/fa';

const Research: React.FC = () => {
  return (
    <div className="research-container">
      <div className="research-header">
        <h2 className="research-title">🔬 Doctoral Research Overview</h2>
        <p className="research-subtitle">
          Department of Computer Science & Engineering, Delhi Technological University (DTU)
        </p>
      </div>

      <div className="research-main-card">
        <h3>AI-Driven Oral Oncology & Healthcare Machine Learning</h3>
        <p className="research-lead-text">
          My primary research centers on developing robust, interpretable deep learning models for the early detection and risk stratification of oral cancer from medical and clinical imaging. By combining convolutional neural networks, vision transformers, and multimodal learning techniques, we aim to bridge the gap between algorithmic accuracy and real-world clinical deployment.
        </p>

        <div className="research-pillars">
          <div className="pillar-card">
            <h4><FaBrain color="#e50914" style={{ marginRight: 8 }} /> Deep Learning in Oncology</h4>
            <p>
              Investigating transfer learning, attention mechanisms, and self-supervised architectures on limited and heterogeneous clinical datasets to identify subtle neoplastic tissue patterns.
            </p>
          </div>

          <div className="pillar-card">
            <h4><FaHospitalAlt color="#e50914" style={{ marginRight: 8 }} /> Clinical Translation</h4>
            <p>
              Working towards point-of-care decision support systems that provide explainable diagnostic insights to oncologists, pathologists, and dental practitioners.
            </p>
          </div>

          <div className="pillar-card">
            <h4><FaMicroscope color="#e50914" style={{ marginRight: 8 }} /> Multimodal Medical Data</h4>
            <p>
              Exploring the synergy between photographic tissue captures, histopathological images, and structured clinical records for comprehensive patient evaluation.
            </p>
          </div>
        </div>

        <div className="research-actions">
          <Link to="/research-problems" className="research-cta-btn">
            Explore Research Problems <FaArrowRight />
          </Link>
          <Link to="/publications" className="research-secondary-btn">
            View Publications <FaBookOpen />
          </Link>
          <Link to="/research-interests" className="research-secondary-btn">
            Research Interests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Research;
