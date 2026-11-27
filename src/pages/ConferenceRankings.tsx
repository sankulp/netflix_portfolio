import React, { useState } from 'react';
import './ConferenceRankings.css';
import { FaExternalLinkAlt, FaTrophy, FaFilter } from 'react-icons/fa';

interface Conference {
  name: string;
  rank: 'A*' | 'A' | 'B' | string;
  acronym?: string;
  field?: string;
  submissionDeadline?: string;
  conferenceDate?: string;
  location?: string;
  link?: string;
  note?: string;
}

// Static curated list of top AI/ML/Healthcare conferences — update as needed
// or connect to DatoCMS model "conference_rankings" if you add one later
const TOP_CONFERENCES: Conference[] = [
  // A* Conferences
  { rank: 'A*', name: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition', acronym: 'CVPR', field: 'Computer Vision / AI', link: 'https://cvpr.thecvf.com/' },
  { rank: 'A*', name: 'International Conference on Machine Learning', acronym: 'ICML', field: 'Machine Learning', link: 'https://icml.cc/' },
  { rank: 'A*', name: 'Neural Information Processing Systems', acronym: 'NeurIPS', field: 'Machine Learning / AI', link: 'https://neurips.cc/' },
  { rank: 'A*', name: 'International Conference on Computer Vision', acronym: 'ICCV', field: 'Computer Vision', link: 'https://iccv.thecvf.com/' },
  { rank: 'A*', name: 'International Joint Conference on Artificial Intelligence', acronym: 'IJCAI', field: 'Artificial Intelligence', link: 'https://www.ijcai.org/' },
  { rank: 'A*', name: 'AAAI Conference on Artificial Intelligence', acronym: 'AAAI', field: 'Artificial Intelligence', link: 'https://aaai.org/' },
  { rank: 'A*', name: 'ACM International Conference on Multimedia', acronym: 'MM', field: 'Multimedia / Medical Imaging', link: 'https://www.acmmm.org/' },
  { rank: 'A*', name: 'Medical Image Computing and Computer Assisted Intervention', acronym: 'MICCAI', field: 'Medical Imaging / Healthcare AI', link: 'https://www.miccai.org/' },
  // A Conferences
  { rank: 'A', name: 'European Conference on Computer Vision', acronym: 'ECCV', field: 'Computer Vision', link: 'https://eccv.ecva.net/' },
  { rank: 'A', name: 'IEEE International Conference on Data Mining', acronym: 'ICDM', field: 'Data Mining / ML', link: 'https://icdm.thecvf.com/' },
  { rank: 'A', name: 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining', acronym: 'KDD', field: 'Data Mining / AI', link: 'https://kdd.org/' },
  { rank: 'A', name: 'International Conference on Learning Representations', acronym: 'ICLR', field: 'Deep Learning', link: 'https://iclr.cc/' },
  { rank: 'A', name: 'IEEE International Conference on Image Processing', acronym: 'ICIP', field: 'Image Processing', link: 'https://www.ieeeicip.org/' },
  { rank: 'A', name: 'ACM International Conference on Information and Knowledge Management', acronym: 'CIKM', field: 'Information Systems / AI', link: 'https://www.cikm2024.org/' },
  { rank: 'A', name: 'IEEE International Symposium on Biomedical Imaging', acronym: 'ISBI', field: 'Biomedical Imaging / Healthcare AI', link: 'https://biomedicalimaging.org/' },
  { rank: 'A', name: 'SPIE Medical Imaging', acronym: 'SPIE MI', field: 'Medical Imaging', link: 'https://spie.org/conferences-and-exhibitions/medical-imaging' },
];

const ConferenceRankings: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'A*' | 'A'>('All');

  const filtered = filter === 'All'
    ? TOP_CONFERENCES
    : TOP_CONFERENCES.filter(c => c.rank === filter);

  return (
    <div className="conf-container">
      <div className="conf-header">
        <h2 className="conf-title">
          <FaTrophy style={{ marginRight: 10, color: '#DB202C' }} />
          A* &amp; A Ranked Conferences
        </h2>
        <p className="conf-subtitle">
          CORE/ERA ranked premier venues in AI, Machine Learning, Computer Vision, and Healthcare AI —
          the conferences I target and track for cutting-edge research.
        </p>
        <div className="conf-filter-bar">
          <FaFilter style={{ marginRight: 8, color: '#aaa' }} />
          {(['All', 'A*', 'A'] as const).map(r => (
            <button
              key={r}
              className={`conf-filter-btn${filter === r ? ' active' : ''}`}
              onClick={() => setFilter(r)}
            >
              {r === 'All' ? 'All Venues' : `Rank ${r}`}
            </button>
          ))}
        </div>
      </div>

      <div className="conf-grid">
        {filtered.map((conf, idx) => (
          <div key={idx} className={`conf-card rank-${conf.rank.replace('*', 'star')}`}>
            <div className="conf-card-top">
              <span className={`conf-rank-badge rank-${conf.rank.replace('*', 'star')}`}>
                {conf.rank}
              </span>
              {conf.acronym && <span className="conf-acronym">{conf.acronym}</span>}
            </div>
            <h3 className="conf-name">{conf.name}</h3>
            {conf.field && <p className="conf-field">🔬 {conf.field}</p>}
            {conf.submissionDeadline && (
              <p className="conf-deadline">📅 Submission: {conf.submissionDeadline}</p>
            )}
            {conf.conferenceDate && (
              <p className="conf-date">🗓️ Conference: {conf.conferenceDate}</p>
            )}
            {conf.location && <p className="conf-location">📍 {conf.location}</p>}
            {conf.note && <p className="conf-note">💡 {conf.note}</p>}
            {conf.link && (
              <a
                href={conf.link}
                target="_blank"
                rel="noopener noreferrer"
                className="conf-link"
              >
                Visit Website <FaExternalLinkAlt size={11} />
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="conf-footer-note">
        Rankings based on <a href="https://portal.core.edu.au/conf-ranks/" target="_blank" rel="noopener noreferrer">CORE 2023</a>.
        Deadlines updated periodically — always verify on the official conference website.
      </p>
    </div>
  );
};

export default ConferenceRankings;
