import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pokedex</Text>
      <Text style={styles.description}>Gotta Catch 'Em All 🤜</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ef5350",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 27,
    color: "#f6cc4b",
  },
  description: {
    fontSize: 15,
    color: "#fff",
  },
});
