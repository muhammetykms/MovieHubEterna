import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {ThemeProvider} from './src/theme/ThemeProvider';
import TabNavigator from './src/navigation/TabNavigator';
import MovieDetailScreen from './src/screens/MovieDetailScreen/MovieDetailScreen';
import CastDetailScreen from './src/screens/CastDetailScreen/CastDetailScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen/ProfileEditScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen
              name="Details"
              component={MovieDetailScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CastDetail"
              component={CastDetailScreen}
              options={{headerShown: true, title: 'Oyuncular'}}
            />
            <Stack.Screen
              name="ProfileEdit"
              component={ProfileEditScreen}
              options={{headerShown: true, title: 'Profil Düzenle'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
