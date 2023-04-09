import React, { useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ContextAuth } from "../context/storeAuth";
import { Auth, register } from "../services/authentification";
export default function Register() {
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const { login, password } = data;
    console.log(login, password);
    register({ login, password })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          dispatchAuth({ type: "SET_TOKEN", payload: data.jwt });
          dispatchAuth({
            type: "SET_REFRESH_TOKEN",
            payload: data.refreshToken,
          });
        }
        if (data.error) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View>
      {/* <Button
      title="Go to ContactsList"
      onPress={() => navigation.navigate("ContactsList")}
    ></Button> */}
      <View>
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
              placeholder="Login"
              value={value}
            />
          )}
          name="login"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Password"
              value={value}
            />
          )}
          name="password"
        />

        <Button
          title="Creer un compte"
          style={styles.btnSubmit}
          onPress={handleSubmit(onSubmit)}
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
});
