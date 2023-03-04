
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParams } from "src/interfaces/TRootStackParams";

type Props = NativeStackScreenProps<RootStackParams, "Messages">

export const MessagesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};