import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Movies he was in:</Text>
      <FlatList
        data={people.films}
        renderItem={({item}) => <FilmListItem film={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcf8ed',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
    textDecorationLine: 'underline',
    color: '#333',
    fontFamily: 'Arial',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    marginBottom: 10,
  },
});
