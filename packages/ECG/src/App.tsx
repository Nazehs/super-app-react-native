import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@shopify/restyle';
import useThemeColor from './hooks/useThemeColor';
import MainNavigator from './navigation/MainNavigator';
import store from './store/store';
import { EventProvider } from 'react-native-outside-press';

const App = () => {
  const { theme, setTheme, setPrimaryColor, themeToBeUsed } = useThemeColor();



  return (
    <EventProvider style={{
      flex: 1
    }}>
      <Provider store={store}>
        <ThemeProvider theme={themeToBeUsed}>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </EventProvider >
  );
};

export default App;
