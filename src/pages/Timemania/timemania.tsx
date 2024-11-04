import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useLottery } from "../../hooks";
import Ball from "../../components/Ball";
import timemaniaTheme from "../../themes/timemaniatheme";

const TimemaniaScreen: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return <ActivityIndicator size="large" color="#209869" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const timemaniaNumbers = results.timemania?.numbers || [];

  console.log("API data for Timemania: ", timemaniaNumbers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIMEMANIA</Text>
      <View style={styles.numbersContainer}>
        {timemaniaNumbers.map((num, index) => (
          <Ball
            key={index}
            number={num}
            backgroundColor={timemaniaTheme.colors.background}
            textColor={timemaniaTheme.colors.text}
          />
        ))}
      </View>
      <Text style={styles.date}>
        {results.timemania?.dateInFull || "Date not available"}{" "}
      </Text>
    </View>
  );
};

export default TimemaniaScreen;