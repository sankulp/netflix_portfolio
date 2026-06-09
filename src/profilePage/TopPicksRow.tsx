import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'Recruiter' | 'Academician' | 'Collaborator' | 'Visitor';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  Recruiter: [
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Education", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Conference Reviews", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
],
  Academician: [
    { title: "Research", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Publications", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Fellowships", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Conference Reviews", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Research Interests", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
],
  Collaborator: [
    { title: "Research Interests", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Publications", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Conference Reviews", imgSrc: "https://picsum.photos/seed/achievements/250/200", route: "/certifications", icon: <FaCertificate /> },
  ],
  Visitor: [
    { title: "About", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music", icon: <FaMusic /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Research", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/reading", icon: <FaBook /> },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
  ]
};

const profileLabels: Record<ProfileType, string> = {
  Recruiter: 'Recruiter / HR',
  Academician: 'Academician',
  Collaborator: 'Collaborator',
  Visitor: 'Visitor',
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profileLabels[profile]}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
