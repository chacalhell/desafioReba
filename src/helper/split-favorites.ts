import {People} from '../services/types';

export const splitFavorites = (people: People[], favorites: string[]) => {
  const isNotFavorite = people.filter(p => favorites.indexOf(p.id) === -1);
  const isFavorite = favorites.map(fid => people.find(({id}) => id === fid));
  return {
    favorites: isFavorite.map(p => ({...p, isFavorite: true})) as People[],
    people: isNotFavorite.map(p => ({...p, isFavorite: false})) as People[],
  };
};
