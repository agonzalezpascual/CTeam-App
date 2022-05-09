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

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"Manifiesto">) {
  return (
    <View style={styles.container} lightColor="#eee" darkColor="#000">
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>Manifiesto de la Staking-Pool ORION</Text>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subtitle}>
            Somos C-Team y nuestro objetivo es apoyar la red descentralizada de
            Cardano desde un punto de vista no miope, es decir, planificando a
            largo plazo. Esto implica algunos compromisos, así que aquí están
            los nuestros:
            {"\n"}
            {"\n"}
            • Proporcionar transparencia sobre cómo ejecutamos y
            desarrollamos nuestro ecosistema particular para que los delegadores
            puedan tomar las mejores decisiones.
            {"\n"}
            {"\n"}• Tiene a su disposición nuestra stake-pool con un servicio
            ininterrumpido mientras Cardano esté vivo. No nos preocupan los
            costos operativos a corto plazo, por lo que no dejaremos de operar
            debido a ellos.
            {"\n"}
            {"\n"}• Cumplir un SLA (Service Level Agreement) del 99,9% de
            disponibilidad. Ejecutamos cardano-node en nuestros propios
            servidores y hacemos todo lo posible para automatizar todo para que
            la stake-pool sea resistente, altamente disponible y lista para
            escalar en cuestión de segundos.
            {"\n"}
            {"\n"}• Hacer lo que esté en nuestras manos para mantener vivo y
            saludable el ecosistema de Cardano. Esto incluye informar/corregir
            errores, ejecutar testnets para explorar, crear herramientas y
            colaborar con la comunidad. Y por último, pero no menos importante,
            intentaremos mantener nuestros costos operativos y tarifas lo más
            bajo posible, comenzando con estos números:
            {"\n"}
            {"\n"}• Tarifa fija: 340 ADA por epoch (1 epoch equivale a 5 días en
            la mainnet).
            {"\n"}
            {"\n"}• Tarifa variable: se establecerá en el promedio del
            ecosistema, actualmente, 2.4%.
            {"\n"}
            {"\n"}
          </Text>
        </ScrollView>
      </SafeAreaView>
      <Copyrights></Copyrights>
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
	paddingTop: "1%",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
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
    //flex: 1,
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
