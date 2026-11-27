import React, { useEffect, useState } from 'react';
import './ResearchInterests.css';
import { FaBrain, FaMicroscope, FaHeartbeat, FaEye, FaNetworkWired, FaCheckCircle } from 'react-icons/fa';
import { ResearchInterest } from '../types';
import { getResearchInterests } from '../queries/getResearchInterests';

const defaultInterests: ResearchInterest[] = [
  {
    title: "AI in Healthcare & Digital Oncology",
    description: "Developing computational models to detect pre-malignant lesions and malignant oral cancers early, optimizing patient triage and screening workflows.",
    icon: "FaHeartbeat"
  },
  {
    title: "Deep Learning & Vision Transformers",
    description: "Benchmarking state-of-the-art architectures (ViTs, ConvNeXt, ResNets) for medical image classification and segmentation on specialized biomedical datasets.",
    icon: "FaBrain"
  },
  {
    title: "Medical Image Analysis & Processing",
    description: "Preprocessing, image normalization, artifact reduction, and feature extraction across clinical photographic captures and histopathology slides.",
    icon: "FaMicroscope"
  },
  {
    title: "Explainable AI (XAI) in Clinical Decision Systems",
    description: "Designing transparent and interpretable saliency maps, Grad-CAM overlays, and confidence metrics to build clinician trust in AI diagnostic suggestions.",
    icon: "FaEye"
  },
  {
    title: "Transfer Learning & Low-Resource Adaptation",
    description: "Addressing extreme class imbalance and limited annotations in medical imaging using self-supervision, contrastive learning, and domain adaptation.",
    icon: "FaNetworkWired"
  }
];

const iconMap: Record<string, React.JSX.Element> = {
  FaHeartbeat: <FaHeartbeat />,
  FaBrain: <FaBrain />,
  FaMicroscope: <FaMicroscope />,
  FaEye: <FaEye />,
  FaNetworkWired: <FaNetworkWired />
};

const ResearchInterests: React.FC = () => {
  const [interests, setInterests] = useState<ResearchInterest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResearchInterests();
        if (data && data.length > 0) {
          setInterests(data);
        } else {
          setInterests(defaultInterests);
        }
      } catch (err) {
        console.error('Error fetching research interests:', err);
        setInterests(defaultInterests);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="interests-container">
        <div className="interests-header">
          <h2 className="interests-title">🎯 Research Interests</h2>
          <p className="interests-subtitle">Loading research domains...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="interests-container">
      <div className="interests-header">
        <h2 className="interests-title">🎯 Research Interests</h2>
        <p className="interests-subtitle">
          Core domains and scientific questions driving my doctoral investigations at Delhi Technological University.
        </p>
      </div>

      <div className="interests-grid">
        {interests.map((item, idx) => (
          <div key={idx} className="interest-card">
            <div className="interest-icon-wrapper">
              {(item.icon && iconMap[item.icon]) || <FaCheckCircle />}
            </div>
            <h3 className="interest-title">{item.title}</h3>
            <p className="interest-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchInterests;
