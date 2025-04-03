import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, Link} from '@react-navigation/native';
import { Button, StyleSheet, Text, View} from 'react-native';
import AuthPage from './screens/auth/auth_page';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Auth" 
          component={AuthPage}
          options={{title: 'Authentication'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login/Signup"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
}
