import { StatusBar } from "expo-status-bar";
import { Text, View } from "../components/Themed";
import { Copyrights } from "../components/Copyrights";
import {
  Image,
  StyleSheet,
  TextInput,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";
import { RootTabScreenProps } from "../types";
import React, { useState } from "react";

export default function TabFourScreen({
  navigation,
}: RootTabScreenProps<"Wallet">) {
  const [text, setText] = useState("Initial text");

  const onPressHandler = async (event) => {
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/stake', {mode: 'no-cors'}
      );
      const json = await response.json();
      console.log(json)
      return json.lovelace;
    } catch (error) {
      console.error(error);
    }
  };








  
  return (
    <View style={styles.container} lightColor="#eee" darkColor="#eee">
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>Registrar Wallet</Text>
      <SafeAreaView style={styles.container}>
        <Text style={styles.subtitle}>Nombre de la billetera:</Text>
        <TextInput style={styles.loginbox} placeholder="SilentBob" />
        <Text style={styles.subtitle}>Contraseña de gastos:</Text>
        <TextInput style={styles.loginbox} secureTextEntry={true} />
        <Text style={styles.subtitle2}>Repetir contraseña de gastos:</Text>
        <TextInput style={styles.loginbox} secureTextEntry={true} />

        <Text>{text}</Text>
        <Button title="Change Text" onPress={onPressHandler} />
      </SafeAreaView>
      <Copyrights></Copyrights>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <StatusBar style={Platform.OS === "android" ? "dark" : "auto"} />
      <StatusBar style={Platform.OS === "windows" ? "light" : "auto"} />
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
    paddingTop: "1%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "1%",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "normal",
    backgroundColor: "#eee",
    alignItems: "center",
    marginRight: "1%",
    marginLeft: "1%",
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 10,
    marginBottom: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
