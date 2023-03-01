import React from 'react'
import { Text, View } from 'react-native'

interface IAccount {
  name: string,
  age: Number
}

function AccountScreen({ name, age }: IAccount) {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Text>{name}</Text>
      <Text>{age.toString()}</Text>
    </View>
  )
}

export default AccountScreen