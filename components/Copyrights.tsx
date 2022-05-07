import { Text, TextProps } from "./Themed";
import * as React from "react";
import {
  View,
  ScrollView,
  Linking,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export function Copyrights(props: TextProps) {
  return (
    // <View style={{ flex: 0 }}>
    <View
      style={
        Platform.OS === "ios" || Platform.OS === "android"
          ? styles.movil
          : styles.web
      }
    >
      <View>
        <Text>
          {" "}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://twitter.com/");
            }}
          >
            <Image
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://discord.gg/fqK83fC/");
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7cqlRxN_Y_eGEbw7O-twi8FcURPgkoJPuA&usqp=CAU",
              }}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://github.com/agonzalezpascual/CTeam-App/");
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
              }}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
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

// TODO: Si todo va guay, los dos son el mismo estilo ^.^
const styles = StyleSheet.create({
  movil: {
    flex: 0.2,
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    right: 0,
    bottom: 0,
    // position: "absolute",
    // marginTop: 200,
    // marginBottom: 200,
    // width: 100%,
    // width: 150,
    // borderColor: "red",
    // borderWidth: 1,
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

// pito pito pita pite ^v^
