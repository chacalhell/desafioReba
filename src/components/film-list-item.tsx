import {View, Text, Linking} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FilmCover from './film-cover';

interface Props {
  film: string;
}

export default function FilmListItem({film}: Props) {
  return (
    <View
      style={{flexDirection: 'col', alignItems: 'center', paddingVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Icon name="link" size={15} color="black" />
        <Text
          style={{paddingLeft: 15, color: 'blue'}}
          onPress={() => Linking.openURL('https://google.com.ar')}>
          {film}
        </Text>
      </View>
      <View>
        <FilmCover film={film} />
      </View>
    </View>
  );
}
