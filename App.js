import * as React from 'react';
import { StatusBar, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './src/Home/HomeScreen';
import NewsScreen from './src/NewsScreen';
import SettingsScreen from './src/SettingsScreen';
import SpesialisScreen from './src/Home/Pesan/Spesialis';
import WebScreen from './src/Home/WebScreen';
import BeritaScreen from './src/Home/BeritaScreen';
import DetailScreen from './src/Home/Pesan/DetailScreen';
import SearchScreen from './src/Home/SearchScreen';

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
            } else if (route.name === 'About') {
              iconName = focused 
              ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Info') {
              iconName = focused 
              ? 'newspaper' : 'newspaper-outline';
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
        <Tab.Screen name="Info" component={NewsScreen} />
        <Tab.Screen name="About" component={SettingsScreen} />
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
        <Stack.Screen options={{
          title: 'Detail Dokter',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="DetailScreen" component={DetailScreen} />
        <Stack.Screen options={{
          title: 'Cari Dokter',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '100',
          },
        }} name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}