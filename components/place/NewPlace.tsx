import { styles } from "../../styles/TabStyle";
import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { setCoords } from "../../lib/place";
import { cap, alertPlace } from "../../lib/var";
import { addPlace } from "../../lib/io";

export function NewPlace({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [place, setPlace] = useState<any>(route.params.place);
  const [processing, setProcessing] = useState(false);
  const change = (k: string, v: string) => setPlace({ ...place, [k]: v });
  const validate = (): boolean =>
    !(place.name === null || place.name === "") && place.coordinate !== null;

  useEffect(() => {
    place.coordinate &&
      navigation.navigate("Map", {
        place: place,
      });
  }, [place.coordinate]);

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        {Object.keys(place)
          .slice(2, 4)
          .map((k, i) => (
            <Input
              style={styles.input}
              key={i}
              label={cap(k)}
              value={place[k]?.toString()}
              onChangeText={(t) => change(k, t)}
            />
          ))}
      </View>
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="FIND"
          titleStyle={styles.button.title}
          disabled={processing}
          onPress={() => {
            setProcessing(true);
            place.address && setCoords(place, setPlace);
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
              addPlace(place);
              navigation.goBack();
            } else {
              Alert.alert(alertPlace[0], alertPlace[1], [
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
