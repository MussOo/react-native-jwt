import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ContextAuth } from "../context/storeAuth";
import { getContactById } from "../services/Contact";
import { Linking } from "react-native";

export default function Contact({ navigation, route }) {
  const { id } = route.params;
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const [ContactUser, SetContactUser] = useState("");
  useEffect(() => {
    getContactById(stateAuth, dispatchAuth, id, navigation).then((data) => {
      const d = (
        <>
          <View style={styles.container_contact}>
            <Text style={styles.title}>Contact</Text>
            <View style={styles.container_avatar}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: data.avatar,
                }}
              />
            </View>
            <Text style={styles.text}>
              {data.firstName} {data.lastName}
            </Text>
            <Text style={styles.text}>{data.email}</Text>
            <Text style={styles.text}>{data.phone}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Accueil")}
            >
              <Text
                style={styles.text_button}
                onPress={() => {
                  Linking.openURL(`tel:${data.phone}`);
                }}
              >
                Call
              </Text>
            </TouchableOpacity>
          </View>
        </>
      );
      SetContactUser(d);
    });
  }, []);
  return <View style={styles.container}>{ContactUser}</View>;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
  },
  ContactItem: {
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_contact: {
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    alignContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  text_button: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  container_avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
});
