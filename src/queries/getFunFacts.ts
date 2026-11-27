// queries/getFunFacts.ts
import datoCMSClient from './datoCMSClient';
import { FunFact } from '../types';

const GET_FUN_FACTS = `
  query {
    allFunFacts {
      fact
      description
      category
      icon
    }
  }
`;

export async function getFunFacts(): Promise<FunFact[]> {
  const data = await datoCMSClient.request<{ allFunFacts: FunFact[] }>(GET_FUN_FACTS);
  return data.allFunFacts;
}
