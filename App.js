import react from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './Screens/SignInScreen';

export default function App() {
  return (
    <SignInScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
