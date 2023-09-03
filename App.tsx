import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Session } from "@supabase/supabase-js";
import { Camera } from "expo-camera";
import { supa } from "./lib/supa";
import { UserIdContext, CameraPermissionContext } from "./lib/var";
import { Navigation } from "./components/Navigation";
import { Auth } from "./components/Auth";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [uId, setUId] = useState<string | null>(null);
  const [cameraGranted, setCameraGranted] = useState<boolean>(false);
  const askCameraPermission = async () => {
    const resp = await Camera.requestCameraPermissionsAsync();
    setCameraGranted(resp.granted);
  };

  useEffect(() => {
    supa.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supa.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    setUId(session ? session.user.id : null);
    askCameraPermission();
  }, [session]);

  return (
    <UserIdContext.Provider value={uId}>
      <CameraPermissionContext.Provider value={cameraGranted}>
        <View style={styles.container}>
          <StatusBar style="dark" />
          {uId ? <Navigation /> : <Auth />}
        </View>
      </CameraPermissionContext.Provider>
    </UserIdContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4242E7",
  },
});
