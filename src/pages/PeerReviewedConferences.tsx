import React, { useEffect, useState } from 'react';
import './PeerReviewedConferences.css';
import { FaExternalLinkAlt, FaAward, FaChalkboardTeacher } from 'react-icons/fa';
import { PeerReviewedConference } from '../types';
import { getPeerReviewedConferences } from '../queries/getConferenceReviews';

const PeerReviewedConferences: React.FC = () => {
  const [conferences, setConferences] = useState<PeerReviewedConference[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPeerReviewedConferences();
        setConferences(data || []);
      } catch (err) {
        console.error('Error fetching conference reviews:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="conferences-container">
        <div className="conferences-header">
          <h2 className="conferences-title">🤝 Peer Reviewed Conferences</h2>
          <p className="conferences-subtitle">Loading conference review contributions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="conferences-container">
      <div className="conferences-header">
        <h2 className="conferences-title">🤝 Peer Reviewed Conferences</h2>
        <p className="conferences-subtitle">
          Contributions as a peer reviewer, technical program committee member, and scholarly evaluator for international AI and healthcare computing conferences.
        </p>
      </div>

      {conferences.length === 0 ? (
        <div className="empty-state">
          <FaChalkboardTeacher size={42} color="#e50914" style={{ marginBottom: 16 }} />
          <h3>Academic Service & Peer Review</h3>
          <p>
            Regular reviewer for international conferences and journals in deep learning, medical image processing, and digital oncology. Updates to reviewed venues are maintained via DatoCMS.
          </p>
        </div>
      ) : (
        <div className="conferences-grid">
          {conferences.map((conf, idx) => (
            <div key={idx} className="conference-card">
              <div>
                <div className="conference-card-header">
                  <h3 className="conference-name">{conf.conferenceName}</h3>
                  {conf.year && <span className="conference-year">{conf.year}</span>}
                </div>
                <div className="conference-role">
                  <FaAward style={{ marginRight: 6 }} />
                  {conf.role}
                </div>
                {conf.description && (
                  <p className="conference-description">{conf.description}</p>
                )}
              </div>
              {conf.link && (
                <a
                  href={conf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="conference-link"
                >
                  Conference Details <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeerReviewedConferences;
