import { styles } from "../styles/AuthStyle";
import { useState } from "react";
import { Alert, View, Image, Text } from "react-native";
import { Button, Input } from "@rneui/base";
import { supa } from "../lib/supa";

export function Auth() {
  const logo = require("../assets/logo_BAF.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supa.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supa.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.app_name}>Beer Aficionado</Text>
      <Image source={logo} style={styles.image}></Image>
      <View>
        <Input
          inputStyle={styles.input}
          label="Email"
          leftIcon={{ type: "material-community", name: "email-outline" }}
          onChangeText={(t) => setEmail(t)}
          value={email}
          placeholder="email"
          autoCapitalize={"none"}
        />
        <Input
          inputStyle={styles.input}
          label="Password"
          leftIcon={{ type: "material-community", name: "lock-outline" }}
          onChangeText={(t) => setPassword(t)}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.button_container}>
        <Button
          buttonStyle={styles.button}
          title="SIGN IN"
          titleStyle={styles.button.title}
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
        <Button
          buttonStyle={styles.button}
          title="SIGN UP"
          titleStyle={styles.button.title}
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
    </View>
  );
}
