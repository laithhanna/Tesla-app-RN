import { StyleSheet, View, Image, FlatList } from "react-native";
import carImg from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";

//custom components
import Header from "../components/Header";
import Controls from "../components/Controls";
import MenuOption from "../components/MenuOption";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={carImg} style={styles.image} resizeMode="contain" />
      <Controls />
      <FlatList data={menuOptions} renderItem={MenuOption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
