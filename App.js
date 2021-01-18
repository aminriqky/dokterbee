import * as React from 'react';
import { StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './src/Home/HomeScreen'
import QueueScreen from './src/QueueScreen'
import SettingsScreen from './src/SettingsScreen'
import SpesialisScreen from './src/Home/Pesan/Spesialis'

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'settings' : 'settings-outline';
            } else if (route.name === 'Queue') {
              iconName = focused 
              ? 'trail-sign' : 'trail-sign-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Queue" component={QueueScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="skyblue"/>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'DokterBee',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="DokterBee" component={Home} />
        <Stack.Screen options={{
          title: 'Pilih Dokter',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="Spesialis" component={SpesialisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}