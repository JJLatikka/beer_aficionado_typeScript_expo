import { styles } from "../../styles/TabStyle";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import { Camera } from "expo-camera";
import { Beer, Pic } from "../../lib/beer";

export function TakeAPic({
  beer,
  pics,
  setPics,
  handleDataChanged,
  setCameraOn,
}: {
  beer: Beer;
  pics: Pic[];
  setPics: React.Dispatch<React.SetStateAction<Pic[]>>;
  handleDataChanged: Function;
  setCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const camera = useRef<any>(null);
  const [processing, setProcessing] = useState(false);
  const newPath = () =>
    `${beer.user_id}/${beer.id}/${Math.random().toString().substring(2)}.png`;
  const snap = async () => {
    setProcessing(true);
    if (camera) {
      const photo = await camera.current.takePictureAsync({ base64: true });
      setPics([
        ...pics,
        { path: newPath(), url: photo.uri, newPic: true, base64: photo.base64 },
      ]);
      setCameraOn(false);
    }
    setProcessing(false);
    handleDataChanged();
  };

  return (
    <View style={styles.input_container}>
      <Camera ref={camera} style={styles.camera} />
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="SNAP"
          titleStyle={styles.button.title}
          disabled={processing}
          onPress={() => snap()}
        />
      </View>
    </View>
  );
}
