import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home";
import Goal from "./screens/goals";
import GoalDetails from "./screens/goalDetails";

export default function HomeStack() {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Goals" component={Goal} />
        <Stack.Screen name="Goal Details" component={GoalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
