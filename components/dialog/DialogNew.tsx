import { styles } from "../../styles/DialogStyle";
import { useContext, useState } from "react";
import { Dialog, CheckBox } from "@rneui/themed";
import { UserIdContext } from "../../lib/var";
import { newBeer } from "../../lib/beer";
import { newPlace } from "../../lib/place";
import { newLink } from "../../lib/link";

export function DialogNew({
  navigation,
  show,
  setShow,
}: {
  navigation: any;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const uId = useContext(UserIdContext);
  const [sel, setSel] = useState(1);
  const resetDialog = () => {
    setShow(false);
    setSel(1);
  };
  const execSel = () => {
    switch (sel) {
      case 1:
        resetDialog();
        navigation.navigate("Beer", { beer: { ...newBeer, user_id: uId } });
        break;
      case 2:
        resetDialog();
        navigation.navigate("Place", { place: { ...newPlace, user_id: uId } });
        break;
      case 3:
        resetDialog();
        navigation.navigate("Link", { link: { ...newLink, user_id: uId } });
        break;
    }
  };

  return (
    <Dialog
      overlayStyle={styles.dialog}
      isVisible={show}
      onBackdropPress={() => resetDialog()}
    >
      <Dialog.Title titleStyle={styles.title} title="New" />
      {["Beer", "Place", "Link"].map((s, i) => (
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
          onPress={() => execSel()}
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
