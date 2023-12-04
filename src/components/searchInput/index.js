import {
  Text,
  TextInput,
  Animated,
  View,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { historyAddAction } from "../../redux/actions/historySearch/historySearchAction";
import { useDispatch } from "react-redux";
import { SearchIcon } from "../../constants/icons";

const SearchInput = ({ setSearchKey }) => {
  const [currentText, setCurrentText] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState("");
  const inputWidth = useRef(new Animated.Value(200)).current;

  const dispatch = useDispatch();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
      Animated.timing(inputWidth, {
        toValue: 300,
        duration: 400,
        useNativeDriver: false,
      }).start();
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
      Animated.timing(inputWidth, {
        toValue: 200,
        duration: 400,
        useNativeDriver: false,
      }).start();

      const data = {
        key: currentText,
      };
      if (currentText !== "") {
        dispatch(historyAddAction(data));
      }
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [currentText]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: inputWidth,
          height: 40,
          flexDirection: "row",
          borderWidth: keyboardStatus === "Keyboard Shown" ? 1 : 0,
          borderColor: "red",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <View style={styles.iconContainer}>
          <SearchIcon />
        </View>
        <TextInput
          onBlur={() => Keyboard.dismiss()}
          placeholder="Search"
          style={styles.textInputStyle}
          onSubmitEditing={Keyboard.dismiss}
          autoCapitalize="none"
          onChangeText={(value) => {
            setSearchKey(value), setCurrentText(value);
          }}
        />
      </Animated.View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 60,
  },
  iconContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "white",
    fontSize: 16,
  },
});
