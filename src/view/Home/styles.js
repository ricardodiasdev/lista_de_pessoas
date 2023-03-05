import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#abdbe3",
  },
  personContainer: {
    height: 60,
    margin: 5,
    backgroundColor: "#1e81b0",
    alignItems: "center",
    flexDirection: "row",
  },
  personContainerImage: {
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 5,
    flex: 1,
  },
  personContainerText: {
    fontSize: 15,
    color: "#eeeee4",
    flex: 7,
  },
});

export default styles;
