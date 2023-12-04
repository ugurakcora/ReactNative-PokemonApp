// ListCard.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { favAddAction } from "../../redux/actions/favorites/favoritesAction";
import Toast from "../toast";

export default function ListCard({ item }) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

  const [toast, setToast] = useState(false);

  const addFav = () => {
    const isAlreadyFavorited = favoriteItems.some(
      (favorite) => favorite.id === item.id
    );

    if (!isAlreadyFavorited) {
      dispatch(favAddAction(item));
      showToast("Favorilere Eklendi");
    } else {
      showToast("Tekrar Eklenemez", true);
    }
  };

  const showToast = (message, isError) => {
    setToast({ isVisible: true, message, isError });

    setTimeout(() => {
      setToast({ isVisible: false, message: "", isError: false });
    }, 2000);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        addFav();
      }}
      style={styles.touchableOpacity}
    >
      <ImageBackground
        style={styles.contain}
        source={{ uri: item?.photo }}
        resizeMode="cover"
      >
        <View style={styles.bottom}>
          <Text style={styles.title}>{item?.name}</Text>
        </View>
      </ImageBackground>
      {toast.isVisible && (
        <Toast message={toast.message} isError={toast.isError} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    transform: [{ scale: 1 }],
    transition: "all .3s ease-in-out",
  },
  contain: {
    borderWidth: 1,
    height: 200,
    width: 160,
    position: "relative",
    marginBottom: 20,
    marginHorizontal: 10,
  },
  bottom: {
    backgroundColor: "#00000080",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
});
