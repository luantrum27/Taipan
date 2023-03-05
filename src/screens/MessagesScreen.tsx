
import { Box, Heading, Icon, Input, Row } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParams, "Messages">

export const MessagesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Box>
      <Box justifyContent={"space-between"} flexDirection='row' paddingX={'24px'} paddingY='27px' alignItems='center'>
        <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
          <AntDesign name="arrowleft" style={[styles.icon]} size={16} onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        <Heading size={"xs"} textTransform="uppercase" color={'#fff'} letterSpacing='2xl'>Messages</Heading>
        <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
          <AntDesign style={[styles.icon]} name="setting" size={16} onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
      </Box>
      <Box style={[styles.inputSearchWrapper]}>
        <Input style={[styles.inputSearch]} mx="3" placeholder="Input" w="100%" />
      </Box>
    </Box>
  );

};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 32,
    height: 32,
    borderColor: '#323436',
    borderStyle: 'solid',
    borderRadius: 100,
    backgroundColor: '#000'
  },
  center: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  icon: {
    color: '#fff',
  },
  inputSearchWrapper: {
    width: 327,
    height: 40
  }, 
  inputSearch: {
    
  }
});
