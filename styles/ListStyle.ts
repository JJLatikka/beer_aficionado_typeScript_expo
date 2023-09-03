import { StyleSheet } from "react-native";
import { X, Y, baseFontSize } from "../lib/var";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4242E7",
  },
  list_container: {
    height: Y,
  },
  title_container: {
    width: X,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title_style: {
    fontSize: baseFontSize,
    color: "#A5A5FF",
    alignSelf: "flex-start",
    marginLeft: X / 15,
  },
  chevron_icon: {
    color: "#000000",
    alignSelf: "flex-end",
    marginTop: Y / 130,
    marginRight: X / 30,
  },
  line: {
    backgroundColor: "#A5A5FF",
    height: 2,
    marginTop: Y / 49,
    marginBottom: Y / 47,
  },
});
