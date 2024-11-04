import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLottery } from "../../hooks";
import styles from "./styles";

const LotteryResults: React.FC = () => {
  const { results, loading, error } = useLottery();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lottery Results</Text>

      <View style={styles.result}>
        <Text style={styles.label}>Mega-Sena:</Text>
        <Text style={styles.resultText}>
          {results.megasena?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={styles.result}>
        <Text style={styles.label}>Quina:</Text>
        <Text style={styles.resultText}>
          {results.quina?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>

      <View style={styles.result}>
        <Text style={styles.label}>Timemania:</Text>
        <Text style={styles.resultText}>
          {results.timemania?.numbers.join(", ") ?? "N/A"}{" "}
        </Text>
      </View>
    </View>
  );
};

export default LotteryResults;