// queries/getCurrently.ts
import datoCMSClient from './datoCMSClient';
import { ResearchProblem } from '../types';

const GET_CURRENT_RESEARCH_PROBLEMS = `
  query {
    allResearchProblems {
      title
      domain
      description
    }
  }
`;

export async function getCurrently(): Promise<ResearchProblem[]> {
  try {
    const data = await datoCMSClient.request<{ allResearchProblems: ResearchProblem[] }>(GET_CURRENT_RESEARCH_PROBLEMS);
    return data.allResearchProblems;
  } catch (err) {
    console.error("Error fetching research problems:", err);
    return [];
  }
}

export const getResearchProblems = getCurrently;
