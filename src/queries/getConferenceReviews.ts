// queries/getConferenceReviews.ts
import datoCMSClient from './datoCMSClient';
import { ConferenceReview } from '../types';

const GET_CONFERENCE_REVIEWS = `
  query {
    allConferenceReviews {
      conferenceName
      role
      year
      description
      link
    }
  }
`;

export async function getConferenceReviews(): Promise<ConferenceReview[]> {
  const data = await datoCMSClient.request<{ allConferenceReviews: ConferenceReview[] }>(GET_CONFERENCE_REVIEWS);
  return data.allConferenceReviews;
}

export const getPeerReviewedConferences = getConferenceReviews;
