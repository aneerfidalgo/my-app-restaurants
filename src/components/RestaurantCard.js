import { View, Text, Image } from "react-native";
import styles from "../index";

// name, cuisine, address, rating

export default function RestaurantCard({ singleRest }) {
  return (
    <View>
      <Text style={styles.restaurantsName}>
        {singleRest.name} / {singleRest.cuisine}
      </Text>
      <Text style={styles.address}>{singleRest.address}</Text>

      <Image source={{ uri: singleRest.image }} style={{ width: "100%" }} />
    </View>
  );
}
