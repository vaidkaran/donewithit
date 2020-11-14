// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableNativeFeedback,
  StatusBar,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import Logo from './components/logo';
import WelcomeText from './components/welcomeText';
import CourseGoals from './components/courseGoals';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Logo />
        <WelcomeText />
      </View>
      <View
        style={{
          width: '80%',
          height: '50%',
          backgroundColor: '#4CAF50',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CourseGoals />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
