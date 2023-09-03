import { styles } from "../../styles/ListStyle";
import { useContext, useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { UserIdContext, limitStr, alertDel } from "../../lib/var";
import { Beer } from "../../lib/beer";
import { getBeers, delBeer } from "../../lib/io";

export function BeerList({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const uId = useContext(UserIdContext);
  const [beers, setBeers] = useState<Array<Beer>>([]);
  const line = (): any => <View style={styles.line} />;

  useEffect(() => {
    const { search, term } = {
      search: route.params.search,
      term: route.params.term,
    };
    getBeers(uId, search, term, setBeers);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list_container}>
        <FlatList
          data={beers}
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
                          delBeer(item.id, uId, setBeers);
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
                    onPress={() => navigation.navigate("Beer", { beer: item })}
                  />
                </View>
              </View>
            </ListItem.Content>
          )}
          ListHeaderComponent={beers.length && line()}
          ItemSeparatorComponent={line()}
          ListFooterComponent={beers.length && line()}
        />
      </View>
    </View>
  );
}
