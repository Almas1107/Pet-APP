import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { DogIcon } from "../icons";
import { useNavigation, useRoute } from "@react-navigation/native";

// type DogType = {
//   weight: {
//     imperial: string;
//     metric: string;
//   };
//   height: {
//     imperial: string;
//     metric: string;
//   };
//   id: number;
//   name: string;
//   bred_for: string;
//   breed_group: string;
//   life_span: string;
//   temperament: string;
//   origin: string;
//   reference_image_id: string;
// };

export const Dogs = () => {
  const navigation = useNavigation<any>();
  const [dogs, setDogs] = useState();
  const DataHandler = async () => {
    const result = await axios.get(
      "https://api.thedogapi.com/v1/breeds?limit=20"
    );
    setDogs(result.data);
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
        <DogIcon size={30} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Dogs</Text>
      </View>
      <FlatList
        data={dogs}
        renderItem={({ item: dog, index }) => (
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() =>
              navigation.navigate("DogInner", {
                detail: dog,
              })
            }
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {index + 1} . {dog.name}
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
