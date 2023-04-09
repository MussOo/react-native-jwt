import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Form,
} from "react-native";
import { ContextAuth } from "../context/storeAuth";
import { getContactById } from "../services/Contact";
import { NewContact } from "../services/Contact";
import { useForm, Controller } from "react-hook-form";

export default function ContactNew({ navigation, route }) {
  const [ContactUser, SetContactUser] = useState("");
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      avatar: "",
    },
  });

  const onSubmit = (data) => {
    NewContact(data, stateAuth, dispatchAuth, navigation)
      .then((data) => {
        console.log("response", data);

        navigation.navigate("Contact", { id: data.id });
      })
      .catch((error) => {
        alert("ERROR", error);
        console.log("error", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_contact}>
        <Text style={styles.title}>Contact</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="avatar"
              value={value}
            />
          )}
          name="avatar"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="firstName"
              value={value}
            />
          )}
          name="firstName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="lastName"
              value={value}
            />
          )}
          name="lastName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="email"
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="phone"
              value={value}
            />
          )}
          name="phone"
        />
        <Button
          title="Modifier"
          style={styles.btnSubmit}
          onPress={() => {
            console.log("Nouveaux contact");
            onSubmit(getValues());
          }}
        />
      </View>
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
    width: "100%",
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
    width: 200,
    height: 200,
  },
  container_avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
});
