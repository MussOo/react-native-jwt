import { useContext } from "react";
import { Auth } from "./authentification";

export async function MyFetch(url, headers, context, navigation) {
  const { state, dispatch } = context;
  const { refreshToken } = state;
  // headers.headers.Authorization = "Bearer " + "test";
  console.log(headers);
  return await fetch(url, headers)
    .then((response) => response.json())
    .then((data) => {
      if (data.code === "tokenexpired") {
        console.log("token expired");
        Auth({ refreshToken })
          .then((response) => response.json())
          .then((data) => {
            if (data.jwt) {
              console.log("jwt", data.jwt);
              dispatch({ type: "SET_TOKEN", payload: data.jwt });
              dispatch({
                type: "SET_REFRESH_TOKEN",
                payload: data.refreshToken,
              });
              headers.headers.Authorization = "Bearer " + data.jwt;
              fetch(url, headers)
                .then((response) => response.json())
                .then((data) => {
                  console.log("data", data);
                  navigation.goBack();
                  return data;
                });
            }
            if (data.error) {
              alert(data.message);
              dispatch({ type: "DELETE_ALL" });
              navigation.navigate("Accueil");
            }
          })
          .catch((error) => {
            dispatch({ type: "DELETE_ALL" });
            navigation.navigate("Accueil");
            console.error("Error:", error);
          });
      }
      return data;
    });
}
