import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { app } from './src/utils/firebase'

LogBox.ignoreLogs
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}
