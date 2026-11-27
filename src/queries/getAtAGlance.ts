// queries/getAtAGlance.ts
import datoCMSClient from './datoCMSClient';
import { AtAGlance } from '../types';

const GET_AT_A_GLANCE = `
  query {
    allAtAGlances {
      label
      value
      icon
    }
  }
`;

export async function getAtAGlance(): Promise<AtAGlance[]> {
  try {
    const data = await datoCMSClient.request<{ allAtAGlances: AtAGlance[] }>(GET_AT_A_GLANCE);
    return data.allAtAGlances;
  } catch (err) {
    console.error("Error fetching at a glance:", err);
    return [];
  }
}
