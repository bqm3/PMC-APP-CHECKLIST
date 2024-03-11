import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {ThemeProvider} from './app/context/ThemeContext';
import CheckNavigation from './app/navigation/CheckNavigation';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar />
        <CheckNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
