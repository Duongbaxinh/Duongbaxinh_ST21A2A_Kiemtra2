import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import action from './src/redux/action';
import HomePage from './src/pages/HomePage';
import { AppNavigator } from './src/navigation/app.navigation';

export default function App() {

  return (
    <AppNavigator />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
