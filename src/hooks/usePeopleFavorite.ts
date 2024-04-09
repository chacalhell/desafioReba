import React from 'react';
import {People} from '../services/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ITEM_KEY = 'PEOPLE_FAVORITE';
const SPLICE_CHAR = ',';
export function usePeopleFavorite() {
  const [loading, setLoading] = React.useState(false);
  const getFavorites = async () => {
    setLoading(true);
    const value = await AsyncStorage.getItem(ITEM_KEY);
    setLoading(false);
    return value?.split(SPLICE_CHAR) || [];
  };

  const addToFavorite = async (people: People) => {
    const currentFavorites = await getFavorites();
    //console.log(currentFavorites);
    const exist = currentFavorites.some(id => id === people.id);
    const newFavorites = exist
      ? currentFavorites.filter(id => id !== people.id) // Remove Id
      : [people.id, ...currentFavorites]; // Add Id
    await AsyncStorage.setItem(ITEM_KEY, newFavorites.join(SPLICE_CHAR));
  };
  return {
    loading,
    addToFavorite,
    getFavorites,
  };
}
