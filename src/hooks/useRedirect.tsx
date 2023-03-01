import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "src/interfaces/TRootStackParams";

export const useRedirect = () => useNavigation<NativeStackNavigationProp<RootStackParams>>();