import { styles } from "../../styles/TabStyle";
import { useContext } from "react";
import { View, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { Button } from "@rneui/themed";
import { delPic } from "../../lib/io";
import {
  CameraPermissionContext,
  alertDelPic,
  alertNew,
  alertPermission,
} from "../../lib/var";
import { Beer, Pic } from "../../lib/beer";

export function ShowPics({
  beer,
  pics,
  setPics,
  setCameraOn,
}: {
  beer: Beer;
  pics: Pic[];
  setPics: React.Dispatch<React.SetStateAction<Pic[]>>;
  setCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const cameraGranted = useContext(CameraPermissionContext);
  const handlePicDel = (item: Pic) => {
    setPics(pics.filter((p: Pic) => p.path !== item.path));
    !item.newPic && delPic(item.path);
  };

  return (
    <View style={styles.list_container}>
      <FlatList
        data={pics}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => {
              Alert.alert(alertDelPic[0], alertDelPic[1], [
                {
                  text: "Yes",
                  style: "default",
                  onPress: () => {
                    handlePicDel(item);
                  },
                },
                {
                  text: "No",
                  style: "default",
                  onPress: () => {},
                },
              ]);
            }}
          >
            <Image style={styles.camera} source={{ uri: item.url }}></Image>
          </TouchableOpacity>
        )}
      />
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="CAMERA ON"
          titleStyle={styles.button.title}
          onPress={() => {
            if (cameraGranted) {
              beer.id
                ? setCameraOn(true)
                : Alert.alert(alertNew[0], alertNew[1], [
                    {
                      text: "Ok",
                      style: "default",
                      onPress: () => {},
                    },
                  ]);
            } else {
              Alert.alert(alertPermission[0], alertPermission[1], [
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
