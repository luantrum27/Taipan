import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from 'src/interfaces/TRootStackParams';
import { useRedirect } from '../hooks/useRedirect';

export const Login: React.FC = () => {
  return (
    <View>
      <Text>Sign in</Text>
      <Button title="Go to Jane's profile" />
    </View>
  );
};
