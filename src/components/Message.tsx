import { HStack, Avatar, Text, Box } from 'native-base'
import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'

interface IMessage {
    message: string,
    time: string,
    avatar: ImageSourcePropType,
    isMyMessage: boolean
}

const Message = ({ isMyMessage, message, time, avatar }: IMessage) => {
    
    return (
        <HStack style={[isMyMessage ? styles.myMessage : {}, { gap: 4 }]} alignItems={'center'}>
            <Avatar size={"38px"} style={isMyMessage ? { display: "none" } : {}} source={avatar}/>
            <Box flexDirection={'column'} style={[{ gap: 8 }]}>
                <Box position={'relative'} maxWidth={'260px'} backgroundColor={isMyMessage ? '#2E8AF7' : '#323436'} borderRadius={'4px 12px 12px 12px'} paddingY={'4px'} paddingX={'8px'}>
                    <Text style={[styles.message]}>{message}</Text>
                    <Text style={[styles.timeSendMessage]}>{time}</Text>
                </Box>
            </Box>
        </HStack>
    )
}

const styles = StyleSheet.create({
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
})

export default Message