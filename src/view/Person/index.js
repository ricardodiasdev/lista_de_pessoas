import React from "react";
import { View, Text} from "react-native";

import Header from "../../components/Header";

export default function Person() {
  return (
    <View>
      <Header title={"Pessoa"} />
      <View>
        <Text>PÁGINA DOS DETALHES DA PESSOA</Text>
      </View>
    </View>
  );
}
