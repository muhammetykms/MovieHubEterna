import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Bottom tab navigator oluşturuluyor ve Bottom tab navigator işlemleri yapıldı.
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    //Yeni bir bottom tab eklenmesi yada çıkarılması durumunda bu kısıma yeni bir screen eklenip çıkarılacaktır.
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
