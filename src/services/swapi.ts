import {People} from './types';
const SWAP_URL = 'https://swapi.dev/api/';

const resources = [
  'root',
  'people',
  'films',
  'starships',
  'vehicles',
  'species',
  'planets',
];

async function fetchSwappi(path: string) {
  const response = await fetch(`${SWAP_URL}/${path}`);
  const data = await response.json();
  return data?.results || data;
}

function getById<T>(resource: string) {
  return async (id: string): Promise<T> =>
    await fetchSwappi(`/${resource}/${id}`);
}
const getPeopleId = (url: string) => url.split('/').splice(-2, 1).join();
function getAll<T>(resource: string) {
  return async (): Promise<T[]> => {
    const people = await fetchSwappi(`/${resource}`);
    return people.map(p => ({...p, id: getPeopleId(p.url)}));
  };
}

const people = {all: getAll<People>('people'), find: getById<People>('people')};

export const SwapiService = {people};
