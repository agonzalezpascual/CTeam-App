import React from "react";
import { RootTabScreenProps } from "../types";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "../components/Themed";
import { Copyrights } from "../components/Copyrights";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  TextInput,
  Vibration,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

export default function TabFourScreen({
  navigation,
}: RootTabScreenProps<"Wallet">) {
  const [isLoading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [testADAs, setTestADAs] = useState([]);
  const [testEpoch, setTestEpoch] = useState([]);
  const [testBlock, setTestBlock] = useState([]);
  const [testPool, setTestPool] = useState([]);
  const [testPoolHistory, setPoolHistory] = useState([]);

  const getADAs = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/stake");
      const json = await response.json();

      setTestADAs(json.lovelace);
    } catch (error) {
      console.log("error stake");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getEpochs = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/epoch");
      const json = await response.json();

      setTestEpoch(json.epoch);
    } catch (error) {
      console.log("error epoch");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getBlock = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/block");
      const json = await response.json();

      setTestBlock(json.block);
    } catch (error) {
      console.log("error block");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPool = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/pool");
      const json = await response.json();

      setTestPool(json.blocks_minted);
    } catch (error) {
      console.log("error blocks_minted");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getPoolHistory = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/poolhistory");
      const json = await response.json();

      setPoolHistory(json.active_stake);
    } catch (error) {
      console.log("error active_stake");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getADAs();
    getEpochs();
    getBlock();
    getPool();
    getPoolHistory();
  }, []);

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
            Orion es la pool mas mejón de la red Cardano.
          </Text>

          <TextInput
            style={styles.loginbox}
            placeholder="Type your address here!"
            onChangeText={(newText) => setText(newText)}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>{testEpoch}</Text>

          <TouchableOpacity style={styles.buttonStyle} onPress={getEpochs}>
            <Text>Epoch actual</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>
            <Text style={{ color: "black" }}>TestADAs delegados: </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {testADAs}
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            <Text style={{ color: "black" }}>Epoch actual: </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {testEpoch}
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            <Text style={{ color: "black" }}>Bloque actual: </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {testBlock}
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            <Text style={{ color: "black" }}>Bloques acuñados: </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {testPool}
            </Text>
          </Text>

          <Text style={styles.subtitle}>
            <Text style={{ color: "black" }}>Active stake: </Text>
            <Text style={{ fontWeight: "bold", color: "black" }}>
              {testPoolHistory}
            </Text>
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
    color: "black",
    fontWeight: "bold",
    marginBottom: "1%",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "black",
    fontWeight: "normal",
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1%",
    marginLeft: "1%",
    marginTop: 10,
    flex: 1,
  },
  subtitle_link: {
    fontSize: 18,
    fontWeight: "normal",
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1%",
    marginLeft: "2%",
  },
  loginbox: {
    height: 30,
    //width: 150,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "50%",
    marginTop: 16,
  },
});
