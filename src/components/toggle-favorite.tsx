import React from 'react';
import {TouchableOpacity} from 'react-native';
import {People} from '../services/types';
import {usePeopleFavorite} from '../hooks/usePeopleFavorite';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  people: People;
  onRefresh: () => void;
}
export const ToggleFavorite = ({people, onRefresh}: Props) => {
  const {addToFavorite} = usePeopleFavorite();
  const onAddToFavorite = async () => {
    await addToFavorite(people);
    onRefresh();
  };
  return (
    <TouchableOpacity onPress={onAddToFavorite}>
      {!people.isFavorite && <Icon name="hearto" size={30} color="black" />}
      {people.isFavorite && <Icon name="heart" size={30} color="black" />}
    </TouchableOpacity>
  );
};
