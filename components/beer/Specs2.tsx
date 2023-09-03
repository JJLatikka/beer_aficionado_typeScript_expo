import { styles } from "../../styles/TabStyle";
import { View, Text, TextInput } from "react-native";
import { TabView, Input } from "@rneui/themed";
import { Y, cap } from "../../lib/var";

export function Specs2({ beer, change }: { beer: any; change: Function }) {
  return (
    <TabView.Item>
      <View style={styles.input_container}>
        {Object.keys(beer)
          .slice(6, 8)
          .map((k, i) => (
            <Input
              style={styles.input}
              key={i}
              label={cap(k)}
              value={beer[k]?.toString()}
              onChangeText={(t) => change(k, t)}
            />
          ))}
        <Text style={styles.text_input_header}>Info</Text>
        <TextInput
          style={styles.text_input}
          multiline={true}
          numberOfLines={Y / 100}
          value={beer.info}
          onChangeText={(t) => change("info", t)}
        />
      </View>
    </TabView.Item>
  );
}
