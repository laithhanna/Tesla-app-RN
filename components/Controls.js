import { StyleSheet, View } from "react-native";
import { useState } from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const Controls = () => {
  const [lock, setLock] = useState(true);
  const [boltState, setBoltState] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [carState, setCarState] = useState(false);

  return (
    <View style={styles.controls}>
      <Entypo
        onPress={() => setLock(!lock)}
        name={lock ? "lock" : "lock-open"}
        size={26}
        color={lock ? "gray" : "white"}
      />

      <MaterialCommunityIcons
        onPress={() => setFanState(!fanState)}
        name="fan"
        size={26}
        color={fanState ? "white" : "gray"}
      />

      <FontAwesome5
        onPress={() => setBoltState(!boltState)}
        name="bolt"
        size={26}
        color={boltState ? "yellow" : "gray"}
      />

      <Ionicons
        onPress={() => setCarState(!carState)}
        name="car-sport-sharp"
        size={26}
        color={carState ? "white" : "gray"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});

export default Controls;
