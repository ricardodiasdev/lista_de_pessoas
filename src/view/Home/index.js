import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
            <TouchableOpacity key={i} style={styles.personContainer}>
              <Image style={styles.personContainerImage} source={{uri:person.picture.thumbnail}}/>
              <Text
                style={styles.personContainerText}
              >{`${person.name.title} ${person.name.first} ${person.name.last}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
