import { styles } from "../../styles/ListStyle";
import { useContext, useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import { UserIdContext, alertDel, limitStr } from "../../lib/var";
import { LinkType, openLink } from "../../lib/link";
import { getLinks, delLink } from "../../lib/io";

export function LinkList({ route }: { route: any }) {
  const uId = useContext(UserIdContext);
  const [links, setLinks] = useState<Array<LinkType>>([]);
  const line = (): any => <View style={styles.line} />;

  useEffect(() => {
    const { search, term } = {
      search: route.params.search,
      term: route.params.term,
    };
    getLinks(uId, search, term, setLinks);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list_container}>
        <FlatList
          data={links}
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
                          delLink(item.id, uId, setLinks);
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
                    onPress={() => item.url && openLink(item.url)}
                  />
                </View>
              </View>
            </ListItem.Content>
          )}
          ListHeaderComponent={links.length && line()}
          ItemSeparatorComponent={line()}
          ListFooterComponent={links.length && line()}
        />
      </View>
    </View>
  );
}
