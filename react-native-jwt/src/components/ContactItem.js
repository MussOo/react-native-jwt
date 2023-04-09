import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ContactItem({ navigation, contact }) {
  const { firstName, lastName, id } = contact;

  return (
    <TouchableOpacity
      style={styles.ContactItem}
      onPress={() =>
        navigation.navigate("Contact", {
          id: id,
        })
      }
    >
      <Text>
        {firstName} {lastName}
      </Text>
      <View>
        <Button
          title="Edit"
          onPress={() =>
            navigation.navigate("ContactEdit", {
              id: id,
            })
          }
        ></Button>
      </View>
    </TouchableOpacity>
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
    margin: 5,
    padding: 15,
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
});
