
import { Box, Heading } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";

type Props = NativeStackScreenProps<RootStackParams, "Messages">

export const MessagesScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Box>
      <Heading size={"xs"}>Messages</Heading>
    </Box>
  );
};