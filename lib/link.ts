import { Alert, Linking } from "react-native";
import { alertValid, alertNotValid } from "./var";

type LinkType = {
  id: number | null;
  user_id: string | null;
  name: string | null;
  url: string | null;
};

const newLink: LinkType = {
  id: null,
  user_id: null,
  name: null,
  url: null,
};

const testLink = async (url: string): Promise<boolean> => {
  const valid = await Linking.canOpenURL(url);
  const feedBack = valid ? alertValid : alertNotValid;
  Alert.alert(feedBack[0], feedBack[1], [
    {
      text: "Ok",
      style: "default",
      onPress: () => {},
    },
  ]);
  return valid;
};

const openLink = async (url: string) => {
  (await Linking.canOpenURL(url))
    ? await Linking.openURL(url)
    : Alert.alert(alertNotValid[0], alertNotValid[1], [
        {
          text: "Ok",
          style: "default",
          onPress: () => {},
        },
      ]);
};

const filterLinks = (data: LinkType[], term: string) => {
  return data.filter((o) => o.name?.toLowerCase().includes(term.toLowerCase()));
};

export { LinkType, newLink, testLink, openLink, filterLinks };
