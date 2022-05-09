import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Copyrights } from "../components/Copyrights";
import { Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import { Linking } from 'react-native';
import React from "react";

export default function TabThreeScreen({
  navigation,
}: RootTabScreenProps<"StakePool">) {
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
      <Text style={styles.subtitle}>Orion es la pool que ayuda a nuestro colectivo a financiarse.
      Nuestro grupo de participación se maneja bajo nuestros mismos principios de transparencia y descentralización, por ejemplo,
      comprometidos a mantener un bajo apalancamiento en el ecosistema.</Text>
      
	  <Text style={styles.subtitle}>
	  Pool info:{"\n"}{""}
          <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://adafolio.com/portfolio/8f7da192-0257-11eb-9684-a45e60be653b");
            }}
          >
            * ADAfolio
          </Text>
		  {"\n"}
		  <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://adapools.org/pool/bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16");
            }}
          >
            * ADApools
          </Text>
		  {"\n"}
		  <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://adastat.net/pools/bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16");
            }}
          >
            * AdaStat
          </Text>
		  {"\n"}
		  <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://cardanoscan.io/pool/bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16");
            }}
          >
            * Cardanoscan
          </Text>
		  {"\n"}
		  <Text
            style={styles.subtitle_link}
            onPress={() => {
              Linking.openURL("https://pooltool.io/pool/bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16/delegators");
            }}
          >
            * PoolTool
          </Text>
		  {"\n"}
        <Text
          style={styles.subtitle_link}
          onPress={() => {
            Linking.openURL("https://pool.pm/bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16");
          }}
        >
          * pool.pm
        </Text>
        
        </Text>
      <Text style={styles.subtitle}>RECUERDE comprobar que delega a la Pool correcta: {"\n"}
      POOL_ID=bd24b3372791f401cc029455c44ea77f3c8750ce3b804a354af0ff16</Text>
	  </ScrollView>
	  </SafeAreaView>
        
    <Copyrights></Copyrights>
    
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
    marginBottom: 10,
	textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "normal",
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1%",
    marginLeft: "1%",
    marginTop: 10,
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
  subtitle_link: {
    fontSize: 18,
    fontWeight: "normal",
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
