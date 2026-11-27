import React, { useEffect, useState } from 'react';
import './AtAGlance.css';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaCheck, FaBriefcase, FaUsers, FaAward } from 'react-icons/fa';
import { AtAGlance as AtAGlanceType } from '../types';
import { getAtAGlance } from '../queries/getAtAGlance';

const iconMap: Record<string, React.JSX.Element> = {
  FaBriefcase: <FaBriefcase />,
  FaGraduationCap: <FaGraduationCap />,
  FaUsers: <FaUsers />,
  FaAward: <FaAward />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaLaptopCode: <FaLaptopCode />
};

const defaultStats = [
  { label: 'Applied Experience', value: '6+ Years', sub: 'Academic Teaching & Industry', icon: 'FaBriefcase' },
  { label: 'Doctoral Research', value: 'CSE @ DTU', sub: 'Delhi Technological University', icon: 'FaGraduationCap' },
  { label: 'Students Mentored', value: '200+', sub: 'CS & Analytics Cohorts', icon: 'FaUsers' },
  { label: 'Conferences Reviewed', value: '7+ Venues', sub: 'International Peer Review', icon: 'FaAward' }
];

const AtAGlancePage: React.FC = () => {
  const [stats, setStats] = useState<AtAGlanceType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAtAGlance();
        if (res && res.length > 0) {
          setStats(res);
        }
      } catch (err) {
        console.error('Error fetching at a glance:', err);
      }
    }
    fetchData();
  }, []);

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className="glance-container">
      <div className="glance-header">
        <h2 className="glance-title">⚡ At A Glance</h2>
        <p className="glance-subtitle">
          Key facts, doctoral focus, and professional snapshot for recruiters and academic peers.
        </p>
      </div>

      <div className="glance-stats-grid">
        {displayStats.map((item, idx) => (
          <div key={idx} className="glance-stat-card">
            <div className="glance-stat-value">{item.value}</div>
            <div className="glance-stat-label">{item.label}</div>
            {item.icon && (
              <div style={{ marginTop: 10, color: '#e50914', fontSize: '1.2rem' }}>
                {iconMap[item.icon] || <FaAward />}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="glance-summary-card">
        <h3>Doctoral Researcher & AI Practitioner</h3>
        <p>
          Based at the Department of Computer Science & Engineering, Delhi Technological University (DTU), my work bridges deep learning architectures with clinical diagnostic challenges. With strong foundations in algorithm design, machine learning pipelines, and technical pedagogy, I focus on translational AI that solves tangible health problems.
        </p>

        <div className="glance-points">
          <div className="glance-point-item">
            <FaGraduationCap color="#e50914" />
            <span><strong>Primary Focus:</strong> AI-driven early detection and automated grading of oral cancer from photographic and histopathological images.</span>
          </div>
          <div className="glance-point-item">
            <FaLaptopCode color="#e50914" />
            <span><strong>Technical Stack:</strong> Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, Vision Transformers, Medical Image Processing.</span>
          </div>
          <div className="glance-point-item">
            <FaChalkboardTeacher color="#e50914" />
            <span><strong>Service & Outreach:</strong> Peer reviewer for international conferences, technical speaker, and academic curriculum mentor.</span>
          </div>
          <div className="glance-point-item">
            <FaCheck color="#e50914" />
            <span><strong>Open for:</strong> Research collaborations, joint publications, clinical data partnerships, and invited lectures.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtAGlancePage;
