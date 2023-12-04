import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { ListCard } from "../../components";

export default function ContentList({ data }) {
  return (
    <FlatList
      numColumns={2}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <ListCard key={index} item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
