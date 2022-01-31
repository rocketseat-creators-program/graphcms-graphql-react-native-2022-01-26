import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import AboutPost from '../pages/AboutPost';

export type RootStackParamList = {
  Home: undefined;
  AboutPost: {postId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutPost" component={AboutPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
