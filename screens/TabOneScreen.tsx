import EditScreenInfo from "../components/EditScreenInfo";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "../components/Themed";
import { Image, StyleSheet, Platform } from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container} lightColor="#eee">
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>
        Bienvenido a la aplicación de la Stake Pool ORION
      </Text>

      <Text style={styles.subtitle}>
        El proyecto ORION es una novesosa forma de operar con criptodivisas.
        {"\n"}
        {"\n"}
        Nuestra principal preocupación es acercar al usuario al mundo de las
        criptomonedas de la manera más fácil y sencilla posible... ¡¡Y también
        de la más rentable!!
        {"\n"}
        {"\n"}
        Empieza ahora mismo creándote una cuenta, o mira nuestro F.A.Q. si
        quieres más información sobre el proyecto.
      </Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
      <StatusBar style={Platform.OS === "windows" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "normal",
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
