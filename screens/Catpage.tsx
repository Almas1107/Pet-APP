import { Text, StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
export const CatPage = () => {
  const [url, setUrl] = useState();
  const DataHandler = async () => {
    const result = await axios.get(
      `https://api.thecatapi.com/v1/images/${detail.reference_image_id}`
    );
    setUrl(result.data.url);
  };

  useEffect(() => {
    DataHandler();
  }, []);
  const route = useRoute();
  const { detail }: any = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          objectFit: "cover",
          height: 400,
        }}
        source={{ uri: url }}
      />
      <Text>{detail.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
