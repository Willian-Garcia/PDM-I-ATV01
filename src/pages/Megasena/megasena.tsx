import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useLottery } from "../../hooks/UseLottery/UseLottery";
import Ball from "../../components/Ball";
import megasenaTheme from "../../themes/megasenatheme";

const MegaSenaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const megaSenaNumbers = results.megasena?.numbers || [];

  console.log("API data for MegaSena: ", megaSenaNumbers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.numbersContainer}>
        {megaSenaNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor= {megasenaTheme.colors.background}
            textColor={megasenaTheme.colors.text}
          />
        ))}
      </View>
      <Text style={styles.date}>
        {results.megasena?.dateInFull || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default MegaSenaScreen;