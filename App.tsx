import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home';
import { AppNavigator } from './nav/AppNavigator';

export default function App() {
  return (
    <AppNavigator/>
  );
}