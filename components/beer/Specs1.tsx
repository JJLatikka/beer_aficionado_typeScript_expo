import { styles } from "../../styles/TabStyle";
import { View } from "react-native";
import { TabView, Input } from "@rneui/themed";
import { cap } from "../../lib/var";

export function Specs1({ beer, change }: { beer: any; change: Function }) {
  return (
    <TabView.Item>
      <View style={styles.input_container}>
        {Object.keys(beer)
          .slice(2, 6)
          .map((k, i) => (
            <Input
              style={styles.input}
              key={i}
              label={cap(k)}
              value={beer[k]?.toString()}
              onChangeText={(t) => change(k, t)}
            />
          ))}
      </View>
    </TabView.Item>
  );
}
