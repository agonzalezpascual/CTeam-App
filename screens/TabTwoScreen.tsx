import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image, StyleSheet, TextInput, Button, Alert } from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  return (
    <View style={styles.container} lightColor="#eee">
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>Registrar Wallet</Text>

      <Text style={styles.subtitle1}>Nombre de la billetera:</Text>
      <TextInput style={styles.loginbox} placeholder="SilentBob" />
      <Text style={styles.subtitle2}>Contraseña de gastos:</Text>
      <TextInput style={styles.loginbox} secureTextEntry={true} />
	  <Text style={styles.subtitle2}>Repetir contraseña de gastos:</Text>
      <TextInput style={styles.loginbox} secureTextEntry={true} />
      <Button
        onPress={() => confirm("Esto es un WIP, por favor se paciente")}
        title="Registrar"
        color="#4c55ad"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginbox: {
    height: 25,
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
