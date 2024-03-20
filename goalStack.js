import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Goal from "./screens/goals";
import GoalDetails from "./screens/goalDetails";

const Stack = createNativeStackNavigator();

export default function GoalStack({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="Goal Detail" component={GoalDetails} />
    </Stack.Navigator>
  );
}
