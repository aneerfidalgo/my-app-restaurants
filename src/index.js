import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantCard: {
    width: "100%",
    marginVertical: 8,
    backgroundColor: "fff",
    color: "#444",
    borderRadius: 4,
  },
  restaurantsName: {
    fontsize: 24,
    fontWeight: "600",
    marginVertical: 15,
  },
  cuisine: {
    fontSize: 16,
    fontWeight: "300",
    color: "#303030",
  },
});
