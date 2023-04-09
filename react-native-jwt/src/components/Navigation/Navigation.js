import React, { useEffect, useContext, useState, useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useContact from "../../hooks/useContact";
import { ContextAuth } from "../../context/storeAuth";
import { ContextContact } from "../../context/storeContact";

import Accueil from "../Accueil";
import ContactsList from "../ContactsList";
import Contact from "../Contact";
import ContactNew from "../ContactNew";
import ContactEdit from "../ContactEdit";
import Register from "../Register";

export default function Navigation({}) {
  const { stateAuth, dispatchAuth } = useContext(ContextAuth);
  const { state, dispatch } = useContact(stateAuth);

  return (
    <ContextContact.Provider
      value={{ stateContact: state, dispatchContact: dispatch }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          {stateAuth.token ? (
            <>
              <Stack.Screen
                name="ContactsList"
                component={ContactsList}
                options={({ navigation }) => ({
                  title: "Username",
                  headerTitleAlign: "center",
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "DELETE_ALL" });
                        dispatch({ type: "DELETE_CONTACT" });
                      }}
                      title="Disconnect"
                      color="#FF0808"
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="Contact"
                component={Contact}
                options={({ navigation }) => ({
                  title: "Username",
                  headerTitleAlign: "center",
                  headerLeft: () => (
                    <Button
                      onPress={() => {
                        navigation.goBack();
                      }}
                      title="Retour"
                      color="green"
                    />
                  ),
                  headerRight: () => (
                    <Button
                      onPress={() => {
                        dispatchAuth({ type: "DELETE_ALL" });
                        dispatch({ type: "DELETE_CONTACT" });
                      }}
                      title="Disconnect"
                      color="#FF0808"
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="ContactEdit"
                component={ContactEdit}
              ></Stack.Screen>
              <Stack.Screen
                name="ContactNew"
                component={ContactNew}
              ></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Accueil" component={Accueil} />
              <Stack.Screen name="Register" component={Register} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ContextContact.Provider>
  );
}
