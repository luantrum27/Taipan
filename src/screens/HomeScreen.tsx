
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import { useRedirect } from "../hooks/useRedirect";

type Props = NativeStackScreenProps<RootStackParams, "Home">

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  // const navigation = useRedirect();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Account', { name: "Hoang The Luan", age: 18 })
        }
      />
    </View>
  );
};