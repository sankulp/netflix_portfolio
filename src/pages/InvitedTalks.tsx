import React, { useEffect, useState } from 'react';
import './InvitedTalks.css';
import { FaMicrophone, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { InvitedTalk } from '../types';
import { getInvitedTalks } from '../queries/getInvitedTalks';

const InvitedTalks: React.FC = () => {
  const [talks, setTalks] = useState<InvitedTalk[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getInvitedTalks();
        setTalks(data || []);
      } catch (err) {
        console.error('Error fetching invited talks:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="talks-container">
        <div className="talks-header">
          <h2 className="talks-title">🎤 Invited Talks</h2>
          <p className="talks-subtitle">Loading presentations and guest lectures...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="talks-container">
      <div className="talks-header">
        <h2 className="talks-title">🎤 Invited Talks & Guest Lectures</h2>
        <p className="talks-subtitle">
          Keynotes, technical sessions, and academic seminars delivered on Machine Learning, Deep Learning, and AI in Healthcare.
        </p>
      </div>

      {talks.length === 0 ? (
        <div className="empty-state">
          <FaMicrophone size={42} color="#e50914" style={{ marginBottom: 16 }} />
          <h3>Presentations & Workshops</h3>
          <p>
            With 6+ years of academic teaching and technical mentoring experience, I regularly deliver talks and workshops on deep learning pipelines, healthcare AI, and hands-on ML implementation. Recorded sessions and slides are updated periodically.
          </p>
        </div>
      ) : (
        <div className="talks-list">
          {talks.map((talk, idx) => (
            <div key={idx} className="talk-card">
              <div className="talk-card-top">
                <h3 className="talk-title">{talk.title}</h3>
              </div>
              <div className="talk-meta">{talk.organization ? `${talk.organization} � ${talk.event}` : talk.event}</div>
              <div className="talk-location-date">
                {talk.date && (
                  <span style={{ marginRight: 16 }}>
                    <FaCalendarAlt style={{ marginRight: 6 }} />
                    {talk.date}
                  </span>
                )}
                {talk.location && (
                  <span>
                    <FaMapMarkerAlt style={{ marginRight: 6 }} />
                    {talk.location}
                  </span>
                )}
              </div>
              {talk.description && <p className="talk-description">{talk.description}</p>}
              {talk.link && (
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="talk-link"
                >
                  Session Info / Slides <FaExternalLinkAlt size={11} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InvitedTalks;

