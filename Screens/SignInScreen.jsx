import react from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
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
