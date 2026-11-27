import React, { useEffect, useState } from 'react';
import './Publications.css';
import { FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { Publication } from '../types';
import { getPublications } from '../queries/getPublications';

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPublications();
        setPublications(data || []);
      } catch (err) {
        console.error('Error fetching publications:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="publications-container">
        <div className="publications-header">
          <h2 className="publications-title">📚 Publications</h2>
          <p className="publications-subtitle">Loading research publications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="publications-container">
      <div className="publications-header">
        <h2 className="publications-title">📚 Research Publications</h2>
        <p className="publications-subtitle">
          Peer-reviewed articles, conference proceedings, and doctoral manuscripts in AI-driven healthcare and oral oncology.
        </p>
      </div>

      {publications.length === 0 ? (
        <div className="empty-state">
          <FaBookOpen size={42} color="#e50914" style={{ marginBottom: 16 }} />
          <h3>Manuscripts in Review & Preparation</h3>
          <p>
            Doctoral research papers on AI-powered oral cancer detection and deep learning clinical imaging are currently in submission and under peer review. Check back soon for published preprints and DOI links!
          </p>
        </div>
      ) : (
        <div className="publications-list">
          {publications.map((pub, idx) => (
            <div key={idx} className="publication-card">
              <div className="publication-card-top">
                <h3 className="publication-card-title">{pub.title}</h3>
                {(pub.publication_status || pub.publicationStatus) && (
                  <span className="publication-badge">
                    {pub.publication_status || pub.publicationStatus}
                  </span>
                )}
              </div>
              <p className="publication-authors">{(pub.coAuthors || pub.authors)}</p>
              <p className="publication-venue">
                {(pub.venue || pub.journalConference)} • {pub.year}
              </p>
              {(pub.description || pub.abstract) && <p className="publication-abstract">{(pub.description || pub.abstract)}</p>}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  View Publication <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Publications;

