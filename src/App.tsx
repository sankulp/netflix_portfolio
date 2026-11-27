import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Certifications from './pages/Certifications';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import PeerReviewedConferences from './pages/PeerReviewedConferences';
import ResearchInterests from './pages/ResearchInterests';
import InvitedTalks from './pages/InvitedTalks';
import AtAGlancePage from './pages/AtAGlance';
import ResearchProblems from './pages/ResearchProblems';
import OpenToCollaborate from './pages/OpenToCollaborate';
import CurrentlyPage from './pages/Currently';
import FunFacts from './pages/FunFacts';
import ConferenceRankings from './pages/ConferenceRankings';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/education" element={<Layout><Education /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/research" element={<Layout><Research /></Layout>} />
      <Route path="/publications" element={<Layout><Publications /></Layout>} />
      <Route path="/peer-reviewed-conferences" element={<Layout><PeerReviewedConferences /></Layout>} />
      <Route path="/conference-reviews" element={<Layout><PeerReviewedConferences /></Layout>} />
      <Route path="/conference-rankings" element={<Layout><ConferenceRankings /></Layout>} />
      <Route path="/research-interests" element={<Layout><ResearchInterests /></Layout>} />
      <Route path="/invited-talks" element={<Layout><InvitedTalks /></Layout>} />
      <Route path="/at-a-glance" element={<Layout><AtAGlancePage /></Layout>} />
      <Route path="/research-problems" element={<Layout><ResearchProblems /></Layout>} />
      <Route path="/open-to-collaborate" element={<Layout><OpenToCollaborate /></Layout>} />
      <Route path="/currently" element={<Layout><CurrentlyPage /></Layout>} />
      <Route path="/fun-facts" element={<Layout><FunFacts /></Layout>} />
    </Routes>
  );
};

export default App;
