import React, { useEffect, useState } from 'react';
import './ResearchProblems.css';
import { FaBrain, FaExclamationTriangle } from 'react-icons/fa';
import { ResearchProblem } from '../types';
import { getResearchProblems } from '../queries/getCurrently';

const defaultProblems: ResearchProblem[] = [
  {
    title: "Automated Early Detection of Oral Pre-Cancerous Lesions",
    domain: "Oral Oncology & Deep Learning",
    problemStatement: "Oral squamous cell carcinoma (OSCC) is frequently diagnosed at advanced stages, drastically reducing 5-year survival rates. Subtle histological and visual variations between benign ulcers, leukoplakia, and early-stage carcinomas create a high barrier for non-specialist clinicians during initial screening.",
    methodology: "Utilizing deep convolutional neural networks and self-attention mechanisms with custom loss functions to handle severe class imbalance and morphological variability across clinical datasets.",
    currentStatus: "Active model training and validation on benchmark oral biopsy and photograph datasets."
  },
  {
    title: "Generalization Across Clinical Environments & Device Heterogeneity",
    domain: "Domain Adaptation in Healthcare AI",
    problemStatement: "Medical images acquired using varying lighting conditions, consumer smartphone cameras, intraoral cameras, and clinical microscopes exhibit substantial domain shift, causing conventional classifiers to degrade when deployed in real-world clinic settings.",
    methodology: "Investigating unsupervised domain adaptation (UDA) and contrastive representation learning to enforce domain-invariant feature spaces across varied imaging instruments.",
    currentStatus: "Evaluating cross-domain generalization benchmarks and preprocessing normalization pipelines."
  }
];

const ResearchProblems: React.FC = () => {
  const [problems, setProblems] = useState<ResearchProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResearchProblems();
        if (data && data.length > 0) {
          setProblems(data);
        } else {
          setProblems(defaultProblems);
        }
      } catch (err) {
        console.error('Error fetching research problems:', err);
        setProblems(defaultProblems);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="problems-container">
        <div className="problems-header">
          <h2 className="problems-title">🔬 Current Research Problems</h2>
          <p className="problems-subtitle">Loading research problem statements...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="problems-container">
      <div className="problems-header">
        <h2 className="problems-title">🔬 Current Research Problems</h2>
        <p className="problems-subtitle">
          Core investigative challenges and translational questions being tackled in my ongoing doctoral dissertation.
        </p>
      </div>

      <div className="problems-list">
        {problems.map((problem, idx) => (
          <div key={idx} className="problem-card">
            <div className="problem-card-header">
              <h3 className="problem-title">{problem.title}</h3>
              {problem.domain && (
                <span className="problem-domain-badge">{problem.domain}</span>
              )}
            </div>

            {problem.problemStatement && (
              <>
                <div className="problem-section-title">
                  <FaExclamationTriangle style={{ marginRight: 6 }} /> Clinical Challenge
                </div>
                <p className="problem-text">{problem.problemStatement}</p>
              </>
            )}

            {problem.methodology && (
              <>
                <div className="problem-section-title">
                  <FaBrain style={{ marginRight: 6 }} /> Computational Approach
                </div>
                <p className="problem-text">{problem.methodology}</p>
              </>
            )}

            {problem.currentStatus && (
              <div className="problem-meta-grid">
                <div className="problem-meta-item">
                  <div className="problem-meta-label">Current Milestone:</div>
                  <div className="problem-meta-value">{problem.currentStatus}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProblems;

