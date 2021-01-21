import * as React from 'react';
import { StatusBar, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './src/Home/HomeScreen'
import QueueScreen from './src/QueueScreen'
import SettingsScreen from './src/SettingsScreen'
import SpesialisScreen from './src/Home/Pesan/Spesialis'
import WebScreen from './src/Home/WebScreen'
import BeritaScreen from './src/Home/BeritaScreen'

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
          headerTitle: () => (
            <Image
              style={{ width: 150, marginBottom: 5 }}
              source={require('./assets/logo-white.png')}
              resizeMode='contain'
            />
          ),
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
        <Stack.Screen options={{
          title: 'Web Covid-19 Indonesia',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="WebScreen" component={WebScreen} />
        <Stack.Screen options={{
          title: 'Info Kesehatan',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="BeritaScreen" component={BeritaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}