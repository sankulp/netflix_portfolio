import React from 'react';
import './Currently.css';
import { FaGraduationCap, FaLaptopCode, FaBookReader, FaChalkboardTeacher } from 'react-icons/fa';

const CurrentlyPage: React.FC = () => {
  return (
    <div className="currently-container">
      <div className="currently-header">
        <h2 className="currently-title">⚡ Currently What I'm Up To</h2>
        <p className="currently-subtitle">
          An ongoing snapshot of what’s occupying my time, mind, and terminal right now.
        </p>
      </div>

      <div className="currently-card">
        <div className="currently-status-badge">
          <span className="status-dot"></span>
          Actively Researching & Coding @ DTU
        </div>

        <div className="currently-items">
          <div className="currently-item">
            <div className="currently-item-icon">
              <FaGraduationCap />
            </div>
            <div className="currently-item-content">
              <h4>Doctoral Dissertation Work</h4>
              <p>
                Synthesizing and benchmarking vision transformer architectures for oral lesion classification at Delhi Technological University.
              </p>
            </div>
          </div>

          <div className="currently-item">
            <div className="currently-item-icon">
              <FaLaptopCode />
            </div>
            <div className="currently-item-content">
              <h4>Experimentation & Benchmarking</h4>
              <p>
                Writing PyTorch pipelines to test contrastive learning and self-supervised pretraining on oral histological and photographic datasets.
              </p>
            </div>
          </div>

          <div className="currently-item">
            <div className="currently-item-icon">
              <FaBookReader />
            </div>
            <div className="currently-item-content">
              <h4>Reading & Writing</h4>
              <p>
                Diving into recent papers on Multimodal Foundation Models in Oncology, Self-Supervised Vision Transformers, and preparing journal submissions.
              </p>
            </div>
          </div>

          <div className="currently-item">
            <div className="currently-item-icon">
              <FaChalkboardTeacher />
            </div>
            <div className="currently-item-content">
              <h4>Academic Mentoring</h4>
              <p>
                Guiding undergraduate and postgraduate engineering students in machine learning project design, paper writing, and model deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyPage;
