import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ContactItem from "./ContactItem";
import { ContextContact } from "../context/storeContact";

export default function ContactsList({ navigation }) {
  const { stateContact, dispatchContact } = useContext(ContextContact);
  const [ListContact, setListContact] = useState("");
  useEffect(() => {
    console.log("Contact", stateContact);
    const d = stateContact.contacts.map((item) => {
      return (
        <ContactItem key={item.id} contact={item} navigation={navigation} />
      );
    });
    setListContact(d);
  }, [stateContact]);

  return (
    <View>
      <ScrollView style={styles.ContactItem}>
        {ListContact}
        <TouchableOpacity
          style={styles.ContactItem}
          onPress={() => navigation.navigate("ContactNew")}
        >
          <Text style={styles.TextNewContact}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
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
    marginTop: 15,
    margin: 5,
    padding: 5,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  TextNewContact: {
    fontSize: 50,
    textAlign: "center",
  },
});
