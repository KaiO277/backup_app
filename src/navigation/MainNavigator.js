import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import CreateTable from '../screens/CreateTable';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        {/* <Stack.Screen name="CreateTable" component={CreateTable} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;