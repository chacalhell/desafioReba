import React from 'react';
import {SwapiService} from '../services/swapi';
import {People} from '../services/types';

export function usePeople() {
  const [loading, setLoading] = React.useState(false);
  const [people, setPeople] = React.useState<People[]>([]);
  const getAllPeople = async () => {
    setLoading(true);
    const response = await SwapiService.people.all();
    setPeople(response);
    setLoading(false);
    return response;
  };
  const findPeople = async (id: string) => {
    setLoading(true);
    const response = await SwapiService.people.find(id);
    setLoading(false);
    return response;
  };
  return {
    loading,
    people,
    getAllPeople,
    findPeople,
  };
}
