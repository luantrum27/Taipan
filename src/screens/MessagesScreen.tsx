
import { AddIcon, Box, Heading, Icon } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RootStackParams } from "src/interfaces/TRootStackParams";

type Props = NativeStackScreenProps<RootStackParams, "Messages">

export const MessagesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Box>
      <Heading size={"xs"}>Messages</Heading>
      <Icon as={AntDesign} name="android1" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} />
    </Box>
  );
};