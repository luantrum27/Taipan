
import { Box, extendTheme, FlatList, Heading, Input, NativeBaseProvider, ScrollView, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import UserPinned from "../components/UserPinned";
import { users, conversations } from "../store";
import Conversation from "../components/Conversation";

type Props = NativeStackScreenProps<RootStackParams, "Messages">

export const MessagesScreen: React.FC<Props> = ({ navigation }) => {
  const theme = extendTheme({
    components: {
      Input: {
        variants: {
          rounded: () => {
            return {
              rounded: 'full'
            };
          },
        },
        borderColor: '#323436'
      }
    }
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Box paddingX={'24px'} paddingTop='27px'>
        <Box justifyContent={"space-between"} flexDirection='row' alignItems='center'>
          <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
            <AntDesign name="arrowleft" style={[styles.icon]} size={16} onPress={() => navigation.navigate('Home')} />
          </TouchableOpacity>
          <Heading size={"xs"} textTransform="uppercase" color={'#fff'} letterSpacing='2xl'>Messages</Heading>
          <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
            <AntDesign style={[styles.icon]} name="setting" size={16} onPress={() => navigation.navigate('Home')} />
          </TouchableOpacity>
        </Box>
        <Box style={[styles.inputSearchWrapper, { position: 'relative'}]}>
          <Input variant={["rounded"]} placeholder="Who do you want to chat with?" w="100%" />
          <AntDesign style={[styles.icon, { position: 'absolute', zIndex: 1, top: 15, right: 12 }]} name="search1" size={16} onPress={() => navigation.navigate('Home')} />
        </Box>
      </Box>
      <Box width={'100%'} height={'1px'} backgroundColor='#323436' marginTop={"24px"}></Box>
      <ScrollView width={'100%'}>
        <Box paddingX={'24px'} paddingY='16px'>
          <Text textTransform={'uppercase'} color='#727477' fontSize='12px'>Pinned</Text>
          <FlatList marginTop={'16px'} data={users} renderItem={({ item }) => <UserPinned name={item.name} avatar={item.avatar} />}
            horizontal
          />
        </Box>
        <Box>
          <Box flexDirection={'column'} marginTop={'16px'}>{
            conversations.map((item, index) => <Conversation key={index} {...item} />)
          }</Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
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
    width: '100%',
    height: 40,
    marginTop: 24
  },
});
