import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: "rubik-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    fontFamily: "rubik-regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "#c9ccd6",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "left",
  },

  foot: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footButton: {
    borderWidth: "100%",
    borderColor: "#c9ccd6",
    borderLeftWidth: 5,
    borderRightColor: 5,
  },
});
