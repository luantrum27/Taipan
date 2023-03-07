
import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";

type Props = NativeStackScreenProps<RootStackParams, "Home">

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Messages')
        }
      />
    </View>
  );
};