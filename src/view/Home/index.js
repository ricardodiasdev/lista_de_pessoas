import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import api from "../../service/api";

import Header from "../../components/Header";

export default function Home() {
  const [people, setPeople] = useState({ results: [] });

  useEffect(() => {
    const loadNames = async () => {
      await api
        .get(`https://randomuser.me/api/?results=5&nat=br`)
        .then((response) => {
          setPeople(response.data);
          console.log(people);
        })
        .catch((error) => console.log(error));
    };
    loadNames();
  }, []);

  return (
    <View>
      <Header title="Pessoas" />
      <View style={styles.container}>
        <View>
          {people.results.map((person, i) => (
            <View key={i} style={styles.personContainer}>
              <Text style={styles.personContainerText}>{person.name.first}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
