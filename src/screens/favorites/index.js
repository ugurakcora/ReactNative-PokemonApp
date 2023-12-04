import { View, Text } from "react-native";
import React from "react";
import { FavoritesList } from "../../views";
import { Container, Header } from "../../components";

export default function Favorites() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Container>
        <FavoritesList />
      </Container>
    </View>
  );
}
