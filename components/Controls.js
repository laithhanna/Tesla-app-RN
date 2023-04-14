import { Pressable, StyleSheet, View } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useState } from "react";

const Controls = () => {
  const [lock, setLock] = useState(true);
  const [boltState, setBoltState] = useState(false);

  return (
    <View style={styles.controls}>
      <Pressable onPress={() => setLock(!lock)}>
        <Entypo
          name={lock ? "lock" : "lock-open"}
          size={26}
          color={lock ? "gray" : "white"}
        />
      </Pressable>

      <MaterialCommunityIcons name="fan" size={26} color="gray" />

      <Pressable onPress={() => setBoltState(!boltState)}>
        <FontAwesome5
          name="bolt"
          size={26}
          color={boltState ? "yellow" : "gray"}
        />
      </Pressable>

      <Ionicons name="car-sport-sharp" size={26} color="gray" />
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
