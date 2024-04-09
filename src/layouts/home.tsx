import {Image, ImageBackground, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {usePeople} from '../hooks/usePeople';
import {Loading} from '../components/loading';
import {PeopleList} from '../components/people-list';
import {usePeopleFavorite} from '../hooks/usePeopleFavorite';
import {splitFavorites} from '../helper/split-favorites';

const Home = () => {
  const navigation = useNavigation();
  const {loading, people, getAllPeople} = usePeople();
  const {loading: loadingFavorites, getFavorites} = usePeopleFavorite();
  const [favorites, setF] = React.useState<string[]>([]);
  const onRefresh = () => {
    getAllPeople();
    getFavorites().then(fav => setF(fav));
  };
  React.useEffect(() => {
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isLoading = loading || loadingFavorites;
  const splited = splitFavorites(people, favorites);

  return (
    <View>
      {isLoading && <Loading />}
      <PeopleList
        onRefresh={onRefresh}
        people={splited.favorites}
        navigate={navigation.navigate}
      />
      <PeopleList
        onRefresh={onRefresh}
        people={splited.people}
        navigate={navigation.navigate}
      />
    </View>
  );
};

export default Home;
