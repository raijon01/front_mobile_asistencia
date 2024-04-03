/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// asdasd

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AuthProvider } from './src/context/AuthProvider';
import { Hoja1 } from './src/templates/Hoja1';

export const App = () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Text style={styles.title}>hola mundo </Text>
        <Hoja1 />
      </View>      
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
