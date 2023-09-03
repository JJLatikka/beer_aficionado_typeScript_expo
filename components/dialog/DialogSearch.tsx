import { styles } from "../../styles/DialogStyle";
import { useState } from "react";
import { Dialog, CheckBox, Input, Text } from "@rneui/themed";

export function DialogSearch({
  navigation,
  show,
  setShow,
}: {
  navigation: any;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [term, setTerm] = useState("");
  const [sel, setSel] = useState(1);
  const resetDialog = () => {
    setShow(false);
    setSel(1);
  };
  const execSel = () => {
    switch (sel) {
      case 1:
        resetDialog();
        navigation.navigate("Beers", { search: true, term: term });
        break;
      case 2:
        resetDialog();
        navigation.navigate("Places", { search: true, term: term });
        break;
      case 3:
        resetDialog();
        navigation.navigate("Links", { search: true, term: term });
        break;
    }
  };

  return (
    <Dialog
      overlayStyle={styles.dialog}
      isVisible={show}
      onBackdropPress={() => resetDialog()}
    >
      <Dialog.Title titleStyle={styles.title} title="Search" />
      <Input
        inputStyle={styles.input}
        onChangeText={(t) => setTerm(t)}
        value={term}
        placeholder="search term..."
        autoCapitalize={"none"}
      />
      <Text style={styles.text}>from</Text>
      {["Beers", "Places", "Links"].map((s, i) => (
        <CheckBox
          key={i}
          title={s}
          textStyle={styles.checkbox_text}
          containerStyle={styles.checkbox_container}
          checkedIcon="dot-circle-o"
          checkedColor="#A5A5FF"
          uncheckedIcon="circle-o"
          uncheckedColor="#A5A5FF"
          checked={sel == i + 1}
          onPress={() => setSel(i + 1)}
        />
      ))}
      <Dialog.Actions>
        <Dialog.Button
          title="Confirm"
          titleStyle={styles.button}
          onPress={() => term && execSel()}
        />
        <Dialog.Button
          title="Cancel"
          titleStyle={styles.button}
          onPress={() => resetDialog()}
        />
      </Dialog.Actions>
    </Dialog>
  );
}
