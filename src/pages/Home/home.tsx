import React, { useEffect } from "react";
import { Text, TouchableOpacity, } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStack";


interface Props extends NativeStackScreenProps<RootStackParamList, "Home"> {}

const HomeScreen: React.FC<Props> = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("LotteryDrawer");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao App!</Text>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("LotteryDrawer")}>
          <Text style={styles.ButtonText}>Iniciar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;