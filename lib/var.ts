import { createContext } from "react";
import { Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const UserIdContext = createContext<string | null>(null);

const CameraPermissionContext = createContext<boolean>(false);

const { X, Y }: { X: number; Y: number } = {
  X: Dimensions.get("window").width,
  Y: Dimensions.get("window").height,
};

const baseFontSize = Y / 35;

const Stack = createNativeStackNavigator();

const cap = (k: string): string =>
  `${k.charAt(0).toUpperCase()}${k.substring(1)}`;

const limitStr = (s: string): string =>
  s.length < 23 ? s : s.substring(0, 19) + "...";

const alertSpecs = [
  "Check the specs, please.",
  "You should at least fill in the name of the product. " +
    "Percentage can be a numeric value, only.",
];

const alertDel = [
  "Confirm deletion.",
  "Do you really wish to delete this entry?",
];

const alertDelPic = [
  "Confirm deletion.",
  "Do you want to delete this picture or not?",
];

const alertNew = [
  "This is a new entry!",
  "Not until you have saved this, are you able to add pictures.",
];

const alertPermission = [
  "Camera has no permission!",
  "Not until you have granted camera usage, are you able to take pictures.",
];

const alertPlace = [
  "A place without a name or coordinates!",
  "You should name the place and find it before saving.",
];

const alertLink = [
  "The link has no name or it is untested!",
  "You should name the link and test it before saving.",
];

const alertValid = ["Everything seems fine.", "You may proceed."];

const alertNotValid = ["Cannot open this URL!", "Link may be corrupted."];

export {
  UserIdContext,
  CameraPermissionContext,
  X,
  Y,
  baseFontSize,
  Stack,
  cap,
  limitStr,
  alertSpecs,
  alertDel,
  alertDelPic,
  alertNew,
  alertPermission,
  alertPlace,
  alertLink,
  alertValid,
  alertNotValid,
};
