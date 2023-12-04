import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const Toast = ({ message, isError }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity: fadeAnim,
          backgroundColor: isError
            ? "rgba(255, 0, 0, 0.8)"
            : "rgba(0, 128, 0, 0.8)",
        },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    padding: 15,
    height: 50,
  },
  message: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
});

export default Toast;
