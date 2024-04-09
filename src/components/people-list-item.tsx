import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {People} from '../services/types';
import {ToggleFavorite} from './toggle-favorite';

interface Props {
  people: People;
  onPress: () => void;
  onRefresh: () => void;
}
export const PeopleListItem = ({people, onPress, onRefresh}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        borderBottomColor: '#cac',
        borderBottomWidth: 1,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text>
          {people.id} - {people.name}
        </Text>
      </TouchableOpacity>
      <ToggleFavorite people={people} onRefresh={onRefresh} />
    </View>
  );
};
