import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
});
