import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './src/theme/ThemeProvider'; // Ensure ThemeProvider is wrapped around the app
import {FavoriteMoviesProvider} from './src/context/FavoriteMoviesContext';
import TabNavigator from './src/navigation/TabNavigator'; // Your main navigation
import MovieDetailScreen from './src/screens/MovieDetailScreen/MovieDetailScreen';
import CastDetailScreen from './src/screens/CastDetailScreen/CastDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
