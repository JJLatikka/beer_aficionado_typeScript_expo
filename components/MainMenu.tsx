import { styles } from "../styles/MenuStyle";
import { View } from "react-native";
import { Button } from "@rneui/base";
import { supa } from "../lib/supa";
import { DialogNew } from "./dialog/DialogNew";
import { DialogSearch } from "./dialog/DialogSearch";
import { useState } from "react";

export function MainMenu({ navigation }: { navigation: any }) {
  const [showNew, setShowNew] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="NEW"
          titleStyle={styles.button.title}
          onPress={() => setShowNew(!showNew)}
        />
        <Button
          buttonStyle={styles.button}
          title="SEARCH"
          titleStyle={styles.button.title}
          onPress={() => setShowSearch(!showSearch)}
        />
        <Button
          buttonStyle={styles.button}
          title="BEERS"
          titleStyle={styles.button.title}
          onPress={() => navigation.navigate("Beers", { search: false })}
        />
        <Button
          buttonStyle={styles.button}
          title="PLACES"
          titleStyle={styles.button.title}
          onPress={() => navigation.navigate("Places", { search: false })}
        />
        <Button
          buttonStyle={styles.button}
          title="LINKS"
          titleStyle={styles.button.title}
          onPress={() => navigation.navigate("Links", { search: false })}
        />
        <Button
          buttonStyle={styles.button}
          title="SIGN OUT"
          titleStyle={styles.button.title}
          onPress={() => supa.auth.signOut()}
        />
      </View>
      {showNew && (
        <DialogNew
          navigation={navigation}
          show={showNew}
          setShow={setShowNew}
        />
      )}
      {showSearch && (
        <DialogSearch
          navigation={navigation}
          show={showSearch}
          setShow={setShowSearch}
        />
      )}
    </View>
  );
}
