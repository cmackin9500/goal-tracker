import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function GoalDetails({ route, navigation }) {
  const { title, description, startDate, endDate } = route.params;
  return <Text>Review Details</Text>;
}
