import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <TouchableOpacity
      style={{ paddingTop: 50 }}
      onPress={() => {
        navigation.navigate("Goals");
      }}
    >
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
