import {Image} from 'react-native';
import React from 'react';

interface Props {
  film: string;
}

export default function FilmCover({film}: Props) {
  const extractFilmId = film.split('/').slice(-2)[0];
  const idFilm = Number(extractFilmId) - 1;

  return [
    <Image source={require('../assets/1.png')} />,
    <Image source={require('../assets/2.png')} />,
    <Image source={require('../assets/3.png')} />,
    <Image source={require('../assets/4.png')} />,
    <Image source={require('../assets/5.png')} />,
    <Image source={require('../assets/6.png')} />,
  ][idFilm];
}
