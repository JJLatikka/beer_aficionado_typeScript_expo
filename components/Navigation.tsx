import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "../lib/var";
import { baseFontSize } from "../lib/var";
import { MainMenu } from "./MainMenu";
import { BeerList } from "./beer/BeerList";
import { BeerTabs } from "./beer/BeerTabs";
import { PlaceList } from "./place/PlaceList";
import { NewPlace } from "./place/NewPlace";
import { PlaceMap } from "./place/PlaceMap";
import { LinkList } from "./link/LinkList";
import { NewLink } from "./link/NewLink";

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#4242E7",
          statusBarStyle: "dark",
          headerStyle: { backgroundColor: "#A5A5FF" },
          headerTitleStyle: { color: "#4242E7", fontSize: baseFontSize },
        }}
      >
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Beers" component={BeerList} />
        <Stack.Screen name="Beer" component={BeerTabs} />
        <Stack.Screen name="Places" component={PlaceList} />
        <Stack.Screen name="Place" component={NewPlace} />
        <Stack.Screen name="Map" component={PlaceMap} />
        <Stack.Screen name="Links" component={LinkList} />
        <Stack.Screen name="Link" component={NewLink} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
