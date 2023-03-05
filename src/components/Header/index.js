import React from "react";
import { Text, View, } from "react-native";

import styles from "./styles";
import back from "../../assets/back.png";

export default function Header(props) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
