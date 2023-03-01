import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import AccountScreen from "./src/screens/AccountScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { registerRootComponent } from 'expo';

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name='Account'
          component={AccountScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );                           
}

registerRootComponent(App);
