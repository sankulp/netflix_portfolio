// queries/getResearchInterests.ts
import datoCMSClient from './datoCMSClient';
import { ResearchInterest } from '../types';

const GET_RESEARCH_INTERESTS = `
  query {
    allResearchInterests {
      title
      keywords
      description
    }
  }
`;

export async function getResearchInterests(): Promise<ResearchInterest[]> {
  try {
    const data = await datoCMSClient.request<{ allResearchInterests: ResearchInterest[] }>(GET_RESEARCH_INTERESTS);
    return data.allResearchInterests;
  } catch (err) {
    console.error("Error fetching research interests:", err);
    return [];
  }
}
