import { StyleSheet } from "react-native";
import { X, Y, baseFontSize } from "../lib/var";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4242E7",
    flex: 1,
    width: X,
  },
  tab_bar: {
    backgroundColor: "#A5A5FF",
  },
  tab_bar_title: {
    color: "#4242E7",
    fontSize: baseFontSize / 2,
  },
  tab_bar_indicator: {
    backgroundColor: "#000000",
    height: 3,
  },
  input_container: {
    width: X,
    marginTop: Y / 15,
    paddingLeft: Y / 50,
    paddingRight: Y / 50,
  },
  input: {
    color: "#A5A5FF",
  },
  text_input_header: {
    color: "#86939E",
    fontSize: baseFontSize * 0.8,
    fontWeight: "700",
    margin: Y / 50,
  },
  text_input: {
    backgroundColor: "#A5A5FF",
    height: Y / 3.5,
    fontSize: baseFontSize,
    fontStyle: "italic",
    color: "#4242E7",
    textAlignVertical: "top",
    margin: baseFontSize / 2,
    padding: baseFontSize / 2,
  },
  list_container: {
    height: Y / 1.5,
    marginTop: Y / 15,
  },
  camera: {
    width: 250,
    height: 350,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
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
    marginTop: Y / 15,
  },
});
