import { styles } from "../../styles/TabStyle";
import { useState } from "react";
import { View, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { testLink } from "../../lib/link";
import { cap, alertLink } from "../../lib/var";
import { addLink } from "../../lib/io";

export function NewLink({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [link, setLink] = useState<any>(route.params.link);
  const [valid, setValid] = useState(false);
  const [processing, setProcessing] = useState(false);
  const change = (k: string, v: string) => setLink({ ...link, [k]: v });
  const validate = (): boolean => {
    return !(link.name === null || link.name === "") && valid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        {Object.keys(link)
          .slice(2, 4)
          .map((k, i) => (
            <Input
              style={styles.input}
              key={i}
              label={cap(k)}
              value={link[k]?.toString()}
              onChangeText={(t) => change(k, t)}
            />
          ))}
      </View>
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="TEST"
          titleStyle={styles.button.title}
          disabled={processing}
          onPress={async () => {
            setProcessing(true);
            link.url && setValid(await testLink(link.url));
            setProcessing(false);
          }}
        />
        <Button
          buttonStyle={styles.button}
          title="SAVE"
          titleStyle={styles.button.title}
          disabled={processing}
          onPress={() => {
            if (validate()) {
              addLink(link);
              navigation.goBack();
            } else {
              Alert.alert(alertLink[0], alertLink[1], [
                {
                  text: "Ok",
                  style: "default",
                  onPress: () => {},
                },
              ]);
            }
          }}
        />
      </View>
    </View>
  );
}
