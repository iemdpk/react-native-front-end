import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/homePage';
import SecondScreen from './Components/SecondScreen';
import ThirdScreen from './Components/ThirdScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown:false,animation:'fade'}} component={HomeScreen} />
        <Stack.Screen name="SecondScreen" options={{headerShown:false,animation:'fade'}} component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" options={{headerShown:false,animation:'fade'}} component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;