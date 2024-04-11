import {People} from './types';
const SWAP_URL = 'https://swapi.dev/api/';

async function fetchSwappi(path: string) {
  const response = await fetch(`${SWAP_URL}/${path}`);
  const data = await response.json();
  return data?.results || data;
}

const getPeopleId = (url: string) => url.split('/').splice(-2, 1).join();
const people = {
  all: async () => {
    const response: People[] = await fetchSwappi('/people');
    return response.map(p => ({...p, id: getPeopleId(p.url)}));
  },
  find: (id: string): Promise<People> => fetchSwappi(`/people/${id}`),
};

export const SwapiService = {people};
