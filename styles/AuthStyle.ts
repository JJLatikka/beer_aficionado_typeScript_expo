import { StyleSheet } from "react-native";
import { X, Y, baseFontSize } from "../lib/var";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4242E7",
    marginTop: Y / 30,
    padding: Y / 50,
  },
  app_name: {
    fontSize: Y / 25,
    fontWeight: "500",
    color: "#A5A5FF",
    fontStyle: "italic",
    textAlign: "center",
  },
  image: {
    height: Y / 4,
    resizeMode: "contain",
    alignSelf: "center",
  },
  input: {
    color: "#A5A5FF",
  },
  button_container: {
    marginTop: Y / 25,
    marginBottom: Y / 15,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#A5A5FF",
    width: X / 2,
    borderRadius: Y / 45,
    title: {
      color: "#4242E7",
      fontSize: baseFontSize,
    },
    marginTop: Y / 35,
    marginBottom: Y / 35,
  },
});
