import React from 'react';
import {View, Text} from 'react-native';
import {People} from '../services/types';
import {FlatList} from 'react-native';
import FilmListItem from '../components/film-list-item';



interface Props {
  route: {
    params: {
      people: People;
    };
  };
}
export default function Details(props: Props) {
  const people = props?.route?.params?.people;
  if (!people) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'col',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderBottomColor: '#cac',
        borderBottomWidth: 1,
      }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          paddingVertical: 20,
          textDecorationLine: 'underline',
          color: 'black',

          
        }}>
        Movies he was in:
      </Text>

      <FlatList
        data={people.films}
        renderItem={({item}) => <FilmListItem film={item} />}
      />
    </View>
  );
}
