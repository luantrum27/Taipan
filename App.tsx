import { DefaultTheme, NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import { HomeScreen } from "./src/screens/HomeScreen";
import { registerRootComponent } from 'expo';
import { MessagesScreen } from "./src/screens/MessagesScreen";
import { NativeBaseProvider } from "native-base";
import { fonts } from "./src/assets/fonts";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(fonts);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer onReady={onLayoutRootView} theme={DarkTheme}>
        <RootStack.Navigator initialRouteName='Messages'>
          <RootStack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name='Messages'
            component={MessagesScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



registerRootComponent(App);
