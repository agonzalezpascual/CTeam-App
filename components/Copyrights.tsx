import { Text, TextProps } from "./Themed";
import * as React from "react";
import {
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export function Copyrights(props: TextProps) {
  return (
    <View
      style={
        Platform.OS === "ios" || Platform.OS === "android"
          ? styles.movil
          : styles.web
      }
    >
      <View>
        <Text>
          {"\n"}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://twitter.com/");
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              resizeMode="stretch"
              source={require("../assets/images/twitter.png")}
            />
          </TouchableOpacity>{" "}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://discord.gg/fqK83fC/");
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              resizeMode="stretch"
              source={require("../assets/images/discord.png")}
            />
          </TouchableOpacity>{" "}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://github.com/agonzalezpascual/CTeam-App/");
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              resizeMode="stretch"
              source={require("../assets/images/github.png")}
            />
          </TouchableOpacity>{" "}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://explorer.cardano-testnet.iohkdev.io/en/address?address=addr_test1qrkwu77nu83jd49rhrmxp9d4fafs53rccvd04nu304gqdtlradf6uj9yh5p5agj5u2eqqn0lg5yq80pq0ejeuy5yn4qqammtf4"
              );
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              resizeMode="stretch"
              source={require("../assets/images/cardanocoin.png")}
            />
          </TouchableOpacity>
        </Text>
      </View>
      <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  movil: {
    flex: 0.2,
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    right: 0,
    bottom: 0,
  },
  web: {
    flex: 0.2,
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
