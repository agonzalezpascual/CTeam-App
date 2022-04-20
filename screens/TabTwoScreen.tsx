import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Image, StyleSheet,TextInput, Button, Alert } from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  return (
    <View style={styles.container} lightColor="#eee">
		<Image
          style={{width: 150, height:180}}
          source={require("../assets/images/cardanocoin.png")}
        />
		<Text style={styles.title}>
        Login de usuario
      </Text>

	  <Text style={styles.subtitle1}>
          Usuario:</Text>
        <TextInput style={styles.loginbox} placeholder="SilentBob" />
		<Text style={styles.subtitle2}>
          Contraseña:</Text>
        <TextInput style={styles.loginbox} secureTextEntry={true} />
        <Button
          onPress={() => confirm('Esto es un WIP por favor se paciente')}
          title="Log in"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  loginbox: {
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
	marginBottom: "10px", 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: 15,
	fontWeight: 'normal',
	marginTop: "20px",
  marginBottom: "5px",
  },
  subtitle2: {
    fontSize: 15,
	fontWeight: 'normal',
  	marginBottom: "5px",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
