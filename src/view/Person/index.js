import React from "react";
import { View, Text, Button } from "react-native";

import styles from "../Home/styles";

export default function Person({ navigation }) {
  return (
    <View >
      <Text>Details Screen</Text>
      <Button
        style={styles.container}
        title="Permaneça aqui"
        onPress={() => navigation.push("Person")}
      />
    </View>
  );
}
