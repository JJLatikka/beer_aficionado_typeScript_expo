import { StyleSheet } from "react-native";
import { X, Y, baseFontSize } from "../lib/var";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4242E7",
    padding: Y / 50,
  },
  button_container: {
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
    marginTop: Y / 30,
    marginBottom: Y / 30,
  },
});
