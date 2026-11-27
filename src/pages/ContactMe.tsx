import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import defaultAvatar from '../images/avataar.png';
import { FaEnvelope, FaCoffee, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import { ContactMe as IContactMe } from '../types';
import { getContactMe } from '../queries/getContactMe';

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getContactMe();
        setUserData(data);
      } catch (err) {
        console.error('Error fetching contact info:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const name = userData?.name || "Sankulp Khera";
  const title = userData?.title || "Doctoral Researcher & AI Practitioner";
  const summary = userData?.summary || "Doctoral researcher at Delhi Technological University working on deep learning for oral cancer detection and healthcare machine learning.";
  const company = userData?.companyUniversity || "Delhi Technological University (DTU)";
  const linkedinUrl = (userData?.linkedinProfile || userData?.linkedin_profile) || userData?.linkedinLink || "https://linkedin.com/in/sankulp-khera";
  const emails = userData?.emails || userData?.email || "sankulpkhera@dtu.ac.in";
  const orcidUrl = (userData?.orcidLink || userData?.orcid_link) || "https://orcid.org";
  const avatarUrl = userData?.profilePicture?.url || defaultAvatar;

  // Split multiple emails if separated by comma or space
  const emailList = emails.split(/[,;\s]+/).filter(Boolean);

  if (loading) {
    return (
      <div className="contact-container">
        <h2>Loading Contact Information...</h2>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={avatarUrl} alt={name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{name}</h3>
          <p className="badge-title">{title}</p>
          <p className="badge-description">{summary}</p>
          <p className="badge-company">
            <FaGraduationCap style={{ marginRight: 6 }} />
            {company}
          </p>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> View LinkedIn
            </a>
          )}
        </div>
      </div>

      <div className="contact-header">
        <p>I am always open to discussing research questions, collaborations, or speaking invitations. Feel free to reach out!</p>
      </div>

      <div className="contact-details">
        {emailList.map((email, idx) => (
          <div key={idx} className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        ))}

        {orcidUrl && (
          <div className="contact-item">
            <SiOrcid className="contact-icon" style={{ color: '#a6ce39' }} />
            <a
              href={orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              ORCID Researcher Profile
            </a>
          </div>
        )}

        {linkedinUrl && (
          <div className="contact-item">
            <FaLinkedin className="contact-icon" style={{ color: '#0077b5' }} />
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
          </div>
        )}

        <div className="contact-fun">
          <p>Or catch up over a coffee or virtual chat ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

