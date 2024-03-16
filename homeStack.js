import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/home";
import Goal from "./screens/goals";
import GoalDetails from "./screens/goalDetails";
import GoalForm from "./screens/goalForm";

const Tab = createBottomTabNavigator();

export default function HomeStack({ para }) {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Add" component={GoalForm} />
        <Tab.Screen name="Goals" component={Goal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
