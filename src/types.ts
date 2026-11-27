// types.ts

export interface ProfileBanner {
  backgroundImage?: { url: string } | null;
  headline: string;
  resumeLink?: string | { url: string };
  linkedinLink: string;
  profileSummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture?: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity?: string;
  emails?: string;
  email?: string;
  linkedinProfile?: string;
  linkedin_profile?: string;
  linkedinLink?: string;
  orcidLink?: string;
  orcid_link?: string;
  phoneNumber?: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface Publication {
  title: string;
  coAuthors?: string;
  authors?: string;
  venue?: string;
  journalConference?: string;
  year: string | number;
  publicationStatus?: string;
  publication_status?: string;
  link?: string;
  description?: string;
  abstract?: string;
}

export interface Fellowship {
  title: string;
  organization: string;
  year: string;
  description: string;
  link?: string;
}

export interface PeerReviewedConference {
  conferenceName: string;
  role: string;
  year: string;
  description?: string;
  link?: string;
}

export type ConferenceReview = PeerReviewedConference;

export interface ResearchInterest {
  title: string;
  description: string;
  keywords?: string;
  icon?: string;
}

export interface InvitedTalk {
  title: string;
  event: string;
  date: string;
  organization?: string;
  location?: string;
  description?: string;
  link?: string;
}

export interface AtAGlance {
  headline?: string;
  summary?: string;
  highlights?: string;
  label?: string;
  value?: string;
  description?: string;
  icon?: string;
}

export interface ResearchProblem {
  title: string;
  domain?: string;
  problemStatement?: string;
  description?: string;
  methodology?: string;
  currentStatus?: string;
  link?: string;
}

export interface FunFact {
  fact: string;
  description?: string;
  category?: string;
  icon?: string;
}






