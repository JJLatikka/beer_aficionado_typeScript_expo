import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { emptyRegion } from "../../lib/place";

export function PlaceMap({ route }: { route: any }) {
  const { lat, lng } = route.params.place.coordinate;
  const r: any = { ...emptyRegion, latitude: lat, longitude: lng };
  const { name, address } = {
    name: route.params.place.name,
    address: route.params.place.address,
  };

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={r}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{ latitude: lat, longitude: lng }}
          title={name}
          description={address}
          pinColor="gold"
        />
      </MapView>
    </View>
  );
}
