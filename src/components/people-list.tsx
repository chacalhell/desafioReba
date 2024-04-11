import {FlatList} from 'react-native';
import React from 'react';
import {PeopleListItem} from '../components/people-list-item';
import {People} from '../services/types';

interface PeopleParam {
  people: People;
}
interface Props {
  people: People[];
  onRefresh: () => void;
  navigate: (route: string, param: PeopleParam) => void;
}
export const PeopleList = ({people, onRefresh, navigate}: Props) => {
  return (
    <FlatList
      
      refreshing={false}
      onRefresh={onRefresh}
      data={people}
      renderItem={({item}) => (
        <PeopleListItem
          people={item}
          onPress={() => navigate('Details', {people: item})}
          onRefresh={onRefresh}
        />
      )}
    />
  );
};
