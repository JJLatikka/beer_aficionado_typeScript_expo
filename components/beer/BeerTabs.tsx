import { styles } from "../../styles/TabStyle";
import { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { TabView } from "@rneui/themed";
import { TabAndTabItems } from "./TabAndTabItems";
import { Specs1 } from "./Specs1";
import { Specs2 } from "./Specs2";
import { Pics } from "./Pics";
import { Notes } from "./Notes";
import { Buffer } from "buffer";
import { Pic } from "../../lib/beer";
import { addBeer, updateBeer, getPics, addPics } from "../../lib/io";
import { alertSpecs } from "../../lib/var";

export function BeerTabs({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [index, setIndex] = useState(0);
  const [cameraOn, setCameraOn] = useState(false);
  const [dataChanged, setDataChanged] = useState(false);
  const [beer, setBeer] = useState<any>(route.params.beer);
  const [pics, setPics] = useState<Array<Pic>>([]);
  const handleDataChanged = () => !dataChanged && setDataChanged(true);
  const change = (k: string, v: string) => {
    setBeer({ ...beer, [k]: v });
    handleDataChanged();
  };
  const validate = (): boolean => {
    return !(beer.name === null || beer.name === "") && !isNaN(beer.percentage);
  };
  const newPics = (): any[][] => {
    return pics
      .filter((p: Pic) => p.newPic)
      .map((p: any) => [p.path, Buffer.from(p.base64, "base64")]);
  };
  const saveData = () => {
    if (validate()) {
      if (dataChanged) {
        if (!beer.id) {
          addBeer(beer);
        } else {
          updateBeer(beer.id, beer);
          const n = newPics();
          n.length && addPics(n);
        }
      }
      navigation.navigate("Menu");
    } else {
      Alert.alert(alertSpecs[0], alertSpecs[1], [
        {
          text: "Ok",
          style: "default",
          onPress: () => {},
        },
      ]);
    }
  };

  useEffect(() => {
    getPics(beer.user_id, beer.id, setPics);
  }, []);

  return (
    <View style={styles.container}>
      <TabAndTabItems index={index} setIndex={setIndex} />
      <TabView
        value={index}
        onChange={setIndex}
        animationType="timing"
        disableSwipe={true}
      >
        <Specs1 beer={beer} change={change} />
        <Specs2 beer={beer} change={change} />
        <Pics
          cameraOn={cameraOn}
          setCameraOn={setCameraOn}
          beer={beer}
          pics={pics}
          setPics={setPics}
          handleDataChanged={handleDataChanged}
        />
        <Notes beer={beer} change={change} saveData={saveData} />
      </TabView>
    </View>
  );
}
