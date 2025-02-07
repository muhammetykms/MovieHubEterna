import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux'; // Redux Provider'ı import ediyoruz
import {store} from './src/redux/store'; // Redux store'u import ediyoruz
import {ThemeProvider} from './src/theme/ThemeProvider'; // Tema sağlayıcıyı import ediyoruz
import TabNavigator from './src/navigation/TabNavigator'; // Ana navigasyon
import MovieDetailScreen from './src/screens/MovieDetailScreen/MovieDetailScreen';
import CastDetailScreen from './src/screens/CastDetailScreen/CastDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* Redux store'u sağlıyoruz */}
      <ThemeProvider>
        {/* Tema sağlayıcıyı sarıyoruz */}
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
      </ThemeProvider>
    </Provider>
  );
};

export default App;
