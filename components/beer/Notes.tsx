import { styles } from "../../styles/TabStyle";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { TabView, Input, Button } from "@rneui/themed";
import { Y } from "../../lib/var";

export function Notes({
  beer,
  change,
  saveData,
}: {
  beer: any;
  change: Function;
  saveData: Function;
}) {
  const [processing, setProcessing] = useState(false);

  return (
    <TabView.Item>
      <View style={styles.input_container}>
        <Input
          style={styles.input}
          label={"Source"}
          value={beer.source}
          onChangeText={(t) => change("source", t)}
        />
        <Text style={styles.text_input_header}>Opinion</Text>
        <TextInput
          style={styles.text_input}
          multiline={true}
          numberOfLines={Y / 100}
          value={beer.opinion}
          onChangeText={(t) => change("opinion", t)}
        />
        <View style={styles.button_container}>
          <Button
            buttonStyle={styles.button}
            title="SAVE"
            titleStyle={styles.button.title}
            onPress={() => {
              setProcessing(true);
              saveData();
              setProcessing(false);
            }}
            disabled={processing}
          />
        </View>
      </View>
    </TabView.Item>
  );
}
