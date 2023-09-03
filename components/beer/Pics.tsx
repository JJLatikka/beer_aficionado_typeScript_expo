import { styles } from "../../styles/TabStyle";
import { View } from "react-native";
import { TabView } from "@rneui/themed";
import { ShowPics } from "./ShowPics";
import { TakeAPic } from "./TakeAPic";
import { Beer, Pic } from "../../lib/beer";

export function Pics({
  cameraOn,
  setCameraOn,
  beer,
  pics,
  setPics,
  handleDataChanged,
}: {
  cameraOn: boolean;
  setCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
  beer: Beer;
  pics: Pic[];
  setPics: React.Dispatch<React.SetStateAction<Pic[]>>;
  handleDataChanged: Function;
}) {
  return (
    <TabView.Item>
      <View style={styles.container}>
        {!cameraOn ? (
          <ShowPics
            beer={beer}
            pics={pics}
            setPics={setPics}
            setCameraOn={setCameraOn}
          />
        ) : (
          <TakeAPic
            beer={beer}
            pics={pics}
            setPics={setPics}
            handleDataChanged={handleDataChanged}
            setCameraOn={setCameraOn}
          />
        )}
      </View>
    </TabView.Item>
  );
}
