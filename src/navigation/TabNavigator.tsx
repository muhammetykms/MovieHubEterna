import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import IMAGES from '../assets';
import {Image} from 'react-native';
import {useTheme} from '../theme/ThemeProvider'; // Import the useTheme hook

// Bottom tab navigator oluşturuluyor ve Bottom tab navigator işlemleri yapıldı.
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {theme} = useTheme(); // Get the current theme

  return (
    //Yeni bir bottom tab eklenmesi yada çıkarılması durumunda bu kısıma yeni bir screen eklenip çıkarılacaktır.
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary, // Active tab icon color
        tabBarInactiveTintColor: theme.colors.text, // Inactive tab icon color
        tabBarStyle: {
          backgroundColor: theme.colors.cardBackground, // Background color for bottom tab
          borderTopWidth: 0, // Optional: Remove the top border
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.HOME}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? theme.colors.primary : theme.colors.text,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.SEARCH}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? theme.colors.primary : theme.colors.text,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.FAVORITE}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? theme.colors.primary : theme.colors.text,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.PROFILE}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? theme.colors.primary : theme.colors.text,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
