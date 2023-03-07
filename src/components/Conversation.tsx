import { Avatar, Box, Text, Pressable } from 'native-base'
import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";
import { useRedirect } from '../hooks/useRedirect';

interface IConversation {
    name: string,
    message: string,
    avatar: ImageSourcePropType ,
    time: string
}

type Props = NativeStackScreenProps<RootStackParams, "Messages">

function Conversation({name, message, avatar, time}: IConversation) {
    const navigation = useRedirect();
    return (
        <Pressable padding={'24px'} onPress={() => {navigation.navigate('ChatScreen')}}>
            <Box flexDirection={'row'} style={{ gap: 8, position: 'relative' }} width={'100%'}>
                <Avatar source={avatar} />
                <Box>
                    <Text style={[styles.username]}>{name}</Text>
                    <Text style={[styles.message]}>{message}</Text>
                </Box>
                <Text style={[styles.time]}>{time}</Text>
            </Box>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    username: {
        color: '#ECEBED',
        fontSize: 14,
        fontWeight: '700'
    },
    message: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '400'
    },
    time: {
        color: '#727477',
        fontSize: 12,
        fontWeight: '400',
        position: 'absolute',
        right: 0
    }
})

export default Conversation