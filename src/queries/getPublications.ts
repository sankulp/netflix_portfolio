// queries/getPublications.ts
import datoCMSClient from './datoCMSClient';
import { Publication } from '../types';

const GET_PUBLICATIONS = `
  query {
    allPublications(orderBy: year_DESC) {
      title
      coAuthors
      venue
      year
      publicationStatus
      description
      link
    }
  }
`;

export async function getPublications(): Promise<Publication[]> {
  const data = await datoCMSClient.request<{ allPublications: Publication[] }>(GET_PUBLICATIONS);
  return data.allPublications;
}
