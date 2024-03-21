import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";

import Home from "./screens/home";
import Goal from "./screens/goals";
import GoalForm from "./screens/goalForm";
import GoalStack from "./goalStack";

const Tab = createBottomTabNavigator();

export default function HomeStack({}) {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Goals") {
              iconName = "bar-chart";
              return <Ionicons name={iconName} size={size} color={color} />;
            }

            iconName = focused ? "close" : "add";
            return (
              <TouchableOpacity
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  backgroundColor: "#FE6D64",
                  paddingTop: 15,
                }}
              >
                <Ionicons
                  name={iconName}
                  size={45}
                  color={color}
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    marginLeft: 16,
                  }}
                />
              </TouchableOpacity>
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Add" component={GoalForm} />
        <Tab.Screen name="Goals" component={GoalStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
