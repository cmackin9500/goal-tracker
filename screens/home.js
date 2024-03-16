import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ paddingTop: 50 }}
        onPress={() => {
          navigation.navigate("Goals");
        }}
      >
        <Text>Button</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback
        style={styles.image}
        onPress={() => {
          navigation.navigate("Goals");
        }}
      >
        <Image source={require("../assets/favicon.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginRight: 10,
    padding: 40,
  },
  image: {
    height: undefined,
    width: "100%",
    maxWidth: windowWidth,
    resizeMode: "contains",
  },
});
