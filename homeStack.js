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
        <Tab.Screen
          name="Add"
          component={GoalForm}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <View
                style={{
                  borderColor: "black",
                  borderRadius: 10,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Add")}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 100,
                    borderWidth: 3,
                    borderColor: "black",
                    backgroundColor: "#FE6D64",
                    paddingTop: 15,
                  }}
                >
                  <Ionicons
                    name={"add"}
                    size={45}
                    color={"green"}
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      marginLeft: 14,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Tab.Screen name="Goals" component={GoalStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
