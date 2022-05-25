import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

const image = {
  uri: "https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg",
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-af.web.app/restaurants/"
        );
        const data = await response.json();
        console.log(data);
        setAllRestaurants(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={image}
        style={styles.container}
      >
        {allRestaurants ? (
          allRestaurants?.map((singleRest) => (
            <Text style={styles.restaurantsName} key={singleRest.id}>
              {singleRest.name}
            </Text>
          ))
        ) : (
          <ActivityIndicator size="large" color="orange" />
        )}
        <Text>Hey whats up!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  restaurantsName: {
    color: "white",
  },
});
