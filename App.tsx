import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import AccountScreen from "./src/screens/AccountScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { registerRootComponent } from 'expo';
import { MessagesScreen } from "./src/screens/MessagesScreen";
import { Example } from "./src/screens/Example";

const RootStack = createNativeStackNavigator<RootStackParams>();

const Account = () => {
  return <AccountScreen name="" age={1} />
}

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Messages'>
        <RootStack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
         <RootStack.Screen
          name='Account'
          component={Account}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Messages'
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name='Example'
          component={Example}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
