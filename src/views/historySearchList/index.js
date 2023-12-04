import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function HistorySearchList() {
  const { historyItems } = useSelector((state) => state.history);
  return (
    <View style={[styles.contain]}>
      {historyItems?.map((item, index) => (
        <Text style={styles.text} key={index}>
          {item?.key} -
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 3,
    padding: 5,
    marginBottom: 20,
  },
  text: {
    marginRight: 10,
    fontSize: 12,
  },
});
