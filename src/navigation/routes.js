import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Favorites } from "../screens/index";
import { FavIcon, HomeIcon } from "../constants/icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeTab") {
            return <HomeIcon focused={focused} />;
          } else if (route.name === "Favorites") {
            return <FavIcon focused={focused} />;
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        options={{ title: "Home Page", headerShown: false }}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen
        options={{ title: "Favorites", headerShown: false }}
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TabMenu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
