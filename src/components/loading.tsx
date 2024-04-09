import React from 'react';
import {View, Text} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 14}}>Cargando...</Text>
    </View>
  );
};
