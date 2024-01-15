import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { CatIcon } from "../icons";
import { useNavigation } from "@react-navigation/native";
export const Cats = () => {
  const navigation = useNavigation<any>();
  const [cats, setCats] = useState();
  const DataHandler = async () => {
    const result = await axios.get(
      "https://api.thecatapi.com/v1/breeds?limit=20"
    );
    setCats(result.data);
  };

  useEffect(() => {
    DataHandler();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          columnGap: 7,
          marginBottom: 30,
        }}
      >
        <CatIcon size={30} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Cats</Text>
      </View>
      <FlatList
        data={cats}
        renderItem={({ item: cat, index }) => (
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate("CatInner", { detail: cat })}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {index + 1} . {cat.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
