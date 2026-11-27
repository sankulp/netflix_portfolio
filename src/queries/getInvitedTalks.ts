// queries/getInvitedTalks.ts
import datoCMSClient from './datoCMSClient';
import { InvitedTalk } from '../types';

const GET_INVITED_TALKS = `
  query {
    allInvitedTalks {
      title
      organization
      event
      date
      description
    }
  }
`;

export async function getInvitedTalks(): Promise<InvitedTalk[]> {
  try {
    const data = await datoCMSClient.request<{ allInvitedTalks: InvitedTalk[] }>(GET_INVITED_TALKS);
    return data.allInvitedTalks;
  } catch (err) {
    console.error("Error fetching invited talks:", err);
    return [];
  }
}
