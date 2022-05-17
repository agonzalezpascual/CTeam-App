import EditScreenInfo from "../components/EditScreenInfo";
import { StatusBar } from "expo-status-bar";
import { View } from "../components/Themed";
import { Copyrights } from "../components/Copyrights";
import {
  Image,
  StyleSheet,
  Platform,
  Linking,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { RootTabScreenProps } from "../types";
import React from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container} lightColor="#eee" darkColor="#eee">
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>Staking-Pool ORION</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subtitle}>
            El proyecto ORION es una novedosa forma de operar con criptodivisas.
            Somos activistas a favor de una Internet descentralizada, neutral y
            resistente a la censura.
            {"\n"}
            {"\n"}
            Nuestro objetivo principal es acercar el mundo de las criptomonedas
            al usuario pero de una manera fácil y sencilla.
            {"\n"}
            {"\n"}
            Comience creando una Wallet (billetera) si no dispone aún de una. O
            consulte la información sobre nuestra Pool.
            {"\n"}
            {"\n"}
          </Text>
          <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://wallet.gamechanger.finance/welcome");
            }}
          >
            Crear o importar una Wallet{"\n"}
            {"\n"}
          </Text>

          <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("http://localhost:19006/orionpool");
            }}
          >
            Orion Staking-Pool{"\n"}
          </Text>
        </ScrollView>
      </SafeAreaView>
      <Copyrights></Copyrights>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <StatusBar style={Platform.OS === "android" ? "dark" : "auto"} />
      <StatusBar style={Platform.OS === "windows" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1%",
  },
  scrollView: {
    marginHorizontal: 20,
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
    justifyContent: "center",
    marginRight: "1%",
    marginLeft: "1%",
    marginTop: 10,
  },
  subtitle_link: {
    fontSize: 18,
    fontWeight: "normal",
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1%",
    marginLeft: "1%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
