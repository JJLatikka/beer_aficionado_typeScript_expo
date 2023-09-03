import { styles } from "../../styles/ListStyle";
import { useContext, useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { UserIdContext, limitStr, alertDel } from "../../lib/var";
import { Place } from "../../lib/place";
import { getPlaces, delPlace } from "../../lib/io";

export function PlaceList({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const uId = useContext(UserIdContext);
  const [places, setPlaces] = useState<Array<Place>>([]);
  const line = (): any => <View style={styles.line} />;

  useEffect(() => {
    const { search, term } = {
      search: route.params.search,
      term: route.params.term,
    };
    getPlaces(uId, search, term, setPlaces);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list_container}>
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <ListItem.Content>
              <View style={styles.title_container}>
                <ListItem.Title
                  style={styles.title_style}
                  onLongPress={() => {
                    Alert.alert(alertDel[0], alertDel[1], [
                      {
                        text: "Yes",
                        style: "default",
                        onPress: () => {
                          delPlace(item.id, uId, setPlaces);
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
                  {limitStr(`${item.name}`)}
                </ListItem.Title>
                <View style={styles.chevron_icon}>
                  <Icon
                    name="chevron-right"
                    color={styles.chevron_icon.color}
                    onPress={() =>
                      navigation.navigate("Map", {
                        place: item,
                      })
                    }
                  />
                </View>
              </View>
            </ListItem.Content>
          )}
          ListHeaderComponent={places.length && line()}
          ItemSeparatorComponent={line()}
          ListFooterComponent={places.length && line()}
        />
      </View>
    </View>
  );
}
