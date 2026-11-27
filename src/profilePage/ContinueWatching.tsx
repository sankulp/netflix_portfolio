import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'Recruiter' | 'Academician' | 'Collaborator' | 'Visitor';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  Recruiter: [
    { title: "At a Glance", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/at-a-glance" },
    { title: "Invited Talks", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/invited-talks" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  Academician: [
    { title: "At a Glance", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/at-a-glance" },
    { title: "Invited Talks", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/invited-talks" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  Collaborator: [
    { title: "Current Research Problem", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/research-problems" },
    { title: "Open to Collaboration", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/open-to-collaborate" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  Visitor: [
    { title: "Currently", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/currently" },
    { title: "Fun Facts", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/fun-facts" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const profileLabels: Record<ProfileType, string> = {
  Recruiter: 'Recruiter / HR',
  Academician: 'Academician',
  Collaborator: 'Collaborator',
  Visitor: 'Visitor',
};


const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profileLabels[profile]}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
