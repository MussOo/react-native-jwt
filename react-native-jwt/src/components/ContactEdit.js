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
import { EditContact } from "../services/Contact";
import { useForm, Controller } from "react-hook-form";
export default function ContactEdit({ navigation, route }) {
  const { id } = route.params;
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const [ContactUser, SetContactUser] = useState("");

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
      avatars: "",
    },
  });

  useEffect(() => {
    getContactById(stateAuth, dispatchAuth, id, navigation).then((data) => {
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("email", data.email);
      setValue("phone", data.phone);
      setValue("avatar", data.avatar);

      SetContactUser(data);
    });
  }, []);

  const onSubmit = (data) => {
    EditContact(data, stateAuth, dispatchAuth, id, navigation).then((data) => {
      navigation.navigate("Contact", { id: id });
    });
  };

  return (
    <View style={styles.container}>
      {ContactUser ? (
        <View style={styles.container_contact}>
          <Text style={styles.title}>Contact</Text>
          <View style={styles.container_avatar}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: ContactUser.avatar,
              }}
            />
          </View>
          <Text style={styles.text}>
            {ContactUser.firstName} {ContactUser.lastName}
          </Text>
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
              console.log("Modifier");
              onSubmit(getValues());
            }}
          />
        </View>
      ) : (
        <Text>Chargement</Text>
      )}
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
