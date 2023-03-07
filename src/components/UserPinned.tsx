import { Avatar, Box, Text } from 'native-base'
import React from 'react'
import { ImageSourcePropType } from 'react-native'

interface IUserPinned {
    name: string,
    avatar: ImageSourcePropType
}

function UserPinned({name, avatar}: IUserPinned) {
  return (
    <Box flexDirection={'column'} alignItems='center' justifyContent={'center'} marginRight='32px'>
        <Avatar source={avatar}/>
        <Text fontSize={'13px'} color='#fff' marginTop={'8px'}>{name}</Text>
    </Box>
  )
}

export default UserPinned
