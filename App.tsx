import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoriteMoviesProvider} from './src/context/FavoriteMoviesContext'; // Import context
import TabNavigator from './src/navigation/TabNavigator'; // Diğer navigatörünüz
import MovieDetailScreen from './src/screens/MovieDetailScreen/MovieDetailScreen';
import CastDetailScreen from './src/screens/CastDetailScreen/CastDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <FavoriteMoviesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen
            name="Details"
            component={MovieDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CastDetail"
            component={CastDetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteMoviesProvider>
  );
};

export default App;
