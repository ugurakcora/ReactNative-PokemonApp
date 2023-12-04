import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import FavoriteCard from "../../components/card/favoriteCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/actions/favorites/favoritesAction";

export default function FavoritesList() {
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector((state) => state.favorites);
  const [isRemoving, setIsRemoving] = useState(false);

  const removeContentWithDelay = (item) => {
    setIsRemoving(true);
    dispatch(removeFav(item));
    setTimeout(() => {
      setIsRemoving(false);
    }, 10000);
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={favoriteItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FavoriteCard
            key={index}
            item={item}
            removeContent={removeContentWithDelay}
          />
        )}
      />
    </View>
  );
}
