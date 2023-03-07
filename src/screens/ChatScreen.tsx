import { Avatar, Box, HStack, Input, NativeBaseProvider, Pressable, ScrollView, Text } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageSourcePropType, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import Message from "../components/Message";
import { messages } from "../store/messages";
import {useRef} from "react";


type Props = NativeStackScreenProps<RootStackParams, "ChatScreen">

export const ChatScreen: React.FC<Props> = ({ navigation }) => {
    const messagesEndRef = useRef<any>(null);
    const [message, setMessage] = useState('');

    const handleOnchangeInput = React.useCallback(
        (message: React.SetStateAction<string>) => {
            setMessage(message);
        },
        []
    );

    useEffect(() => {
        messagesEndRef.current?.scrollToEnd();
    }, [message]);

    const handleSendMessage = () => {
        if (message == '') return;
        const newMessage = {
            isMyMessage: true,
            avatar: '' as ImageSourcePropType,
            message: message,
            time: '8:00 PM'
        }
        messages.push(newMessage);
        setMessage('');
    }

    const onSendMessage = React.useCallback(() => {
        return () => handleSendMessage();
      }, [message]);
    

    return (
        <NativeBaseProvider>
            <Box paddingX={'24px'} paddingTop='27px'>
                <Box justifyContent={"space-between"} flexDirection='row' alignItems='center'>
                    <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
                        <AntDesign name="arrowleft" style={[styles.icon]} size={16} onPress={() => navigation.navigate('Home')} />
                    </TouchableOpacity>
                    <Box flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Avatar size={"32px"} source={require('../assets/images/user-pinned-5.png')} />
                        <Text fontSize={"14px"} fontWeight={'700'} marginTop={'4px'} color='#ECEBED'>Jessica Thompson</Text>
                    </Box>
                    <TouchableOpacity style={[styles.iconWrapper, styles.border, styles.center]}>
                        <Entypo style={[styles.icon]} name="dots-three-vertical" size={16} onPress={() => navigation.navigate('Home')} />
                    </TouchableOpacity>
                </Box>
            </Box>
            <Box width={'100%'} height={'1px'} backgroundColor='#323436' marginTop={"24px"}></Box>
            <ScrollView width={'100%'} ref={messagesEndRef} onContentSizeChange={() => {messagesEndRef.current?.scrollToEnd()}}>
                <Box style={[styles.conversationWrapper]}>
                    <Text style={[styles.timeStartConversation]}>SEP 14, 2021</Text>
                    <Box flexDirection={'column'} style={[{ gap: 44 }]}>
                        {
                            messages.map((message, index) => (
                                <Message {...message} key={index} />
                            ))
                        }
                        <Box ref={messagesEndRef} accessibilityElementsHidden></Box>
                    </Box>
                </Box>
            </ScrollView>
            <Box width={'100%'} paddingX={'14px'} paddingY={'16px'}>
                <HStack width={'100%'} backgroundColor={'#323436'} alignItems='center' justifyContent={'space-between'} paddingRight={'16px'}>
                    <Input onChangeText={value => handleOnchangeInput(value)} value={message} width={'70%'} placeholder="Type your message here..." color={'#ECEBED'} fontSize={'14px'} borderWidth={0} backgroundColor='#323436' paddingY={'10px'} multiline={true} />
                    <HStack alignItems='center' style={[{ gap: 8 }]}>
                        <TouchableOpacity>
                            <EvilIcons name='camera' color={'#fff'} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name='attachment' color={'#fff'} size={18} />
                        </TouchableOpacity>
                        <Pressable style={[styles.circle, styles.center, { backgroundColor: '#AC1AF0' }]} onPress={onSendMessage()}>
                            <FontAwesome name='send' color={'#fff'} size={18} />
                        </Pressable>
                    </HStack>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 32,
        height: 32,
        borderWidth: 0,
        borderRadius: 100,
    },
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
    timeStartConversation: {
        fontSize: 12,
        fontWeight: "400",
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#727477',
        marginVertical: 24
    },
    message: {
        fontSize: 14,
        fontWeight: '400',
        color: '#ECEBED'
    },
    timeSendMessage: {
        fontSize: 12,
        fontWeight: '400',
        color: '#727477',
        position: 'absolute',
        right: 0,
        bottom: -25,
        width: 52
    },
    conversationWrapper: {
        paddingHorizontal: 24,
        paddingBottom: 32
    },
    myMessage: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    }
});

export default ChatScreen