import { styles } from "../../styles/TabStyle";
import { Tab } from "@rneui/themed";

export function TabAndTabItems({
  index,
  setIndex,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Tab
      containerStyle={styles.tab_bar}
      value={index}
      onChange={(i) => setIndex(i)}
      indicatorStyle={styles.tab_bar_indicator}
      variant="primary"
    >
      <Tab.Item
        title="Specs"
        titleStyle={styles.tab_bar_title}
        icon={{ type: "ionicon", name: "beer-outline", color: "#000000" }}
      />
      <Tab.Item
        title="Specs"
        titleStyle={styles.tab_bar_title}
        icon={{ type: "ionicon", name: "document-text-outline", color: "#000000" }}
      />
      <Tab.Item
        title="Pics"
        titleStyle={styles.tab_bar_title}
        icon={{ type: "ionicon", name: "camera-outline", color: "#000000" }}
      />
      <Tab.Item
        title="Notes"
        titleStyle={styles.tab_bar_title}
        icon={{ type: "ionicon", name: "pencil-outline", color: "#000000" }}
      />
    </Tab>
  );
}
