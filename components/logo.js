import React from 'react';
import { View, Image } from 'react-native';

export default function Logo() {
  return (
    <View>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
}
