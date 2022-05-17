import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";
import imageLight from "./assets/icons/eco-light.png";
import imageLightOff from "./assets/icons/eco-light-off.png";
import imageLogoDio from "./assets/icons/logo-dio.me.png";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle((oldToggle) => !oldToggle);
  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle((oldToggle) => !oldToggle);
    });
    return () => subscription.remove();
  }, []);
  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? imageLight : imageLightOff}
        />
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={imageLogoDio}
        />
      </TouchableOpacity>
    </View>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#494652",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
    width: 200,
    height: 200,
  },
});
