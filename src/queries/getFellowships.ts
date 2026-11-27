// queries/getFellowships.ts
import datoCMSClient from './datoCMSClient';
import { Fellowship } from '../types';

const GET_FELLOWSHIPS = `
  query {
    allFellowships {
      title
      organization
      year
      description
      link
    }
  }
`;

export async function getFellowships(): Promise<Fellowship[]> {
  const data = await datoCMSClient.request<{ allFellowships: Fellowship[] }>(GET_FELLOWSHIPS);
  return data.allFellowships;
}
