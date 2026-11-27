import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaBook, FaGraduationCap, FaUser, FaTrophy } from 'react-icons/fa';

type ProfileType = 'Recruiter' | 'Academician' | 'Collaborator' | 'Visitor';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  Recruiter: [
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/workexp/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Education", imgSrc: "https://picsum.photos/seed/education/250/200", icon: <FaGraduationCap />, route: "/education" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Peer Reviewed Conferences", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/peer-reviewed-conferences" },
  ],
  Academician: [
    { title: "Research", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/research", icon: <FaBook /> },
    { title: "Publications", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/publications", icon: <FaProjectDiagram /> },
    { title: "Peer Reviewed Conferences", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/peer-reviewed-conferences", icon: <FaHandsHelping /> },
    { title: "Research Interests", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/research-interests", icon: <FaBriefcase /> },
    { title: "A* & A Conferences", imgSrc: "https://picsum.photos/seed/conferences/250/200", route: "/conference-rankings", icon: <FaTrophy /> },
  ],
  Collaborator: [
    { title: "Research Interests", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/research-interests", icon: <FaHandsHelping /> },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Publications", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/publications", icon: <FaProjectDiagram /> },
    { title: "A* & A Conferences", imgSrc: "https://picsum.photos/seed/conferences/250/200", route: "/conference-rankings", icon: <FaTrophy /> },
  ],
  Visitor: [
    { title: "About", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/about", icon: <FaUser /> },
    { title: "Work Experience", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Education", imgSrc: "https://picsum.photos/seed/educationvis/250/200", route: "/education", icon: <FaGraduationCap /> },
    { title: "Research", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/research", icon: <FaBook /> },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/skills", icon: <FaCode /> },
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
