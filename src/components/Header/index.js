import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import back from "../../assets/back.png";

export default function Header(props, { navigation }) {
  const { title } = props;

  return (
    <View style={styles.container} navigation={navigation}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Person")}>
        <Image source={back} />
      </TouchableOpacity>
    </View>
  );
}
