import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Pressable, SafeAreaView, ScrollView, Image } from "react-native";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

import { Text, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { FAQText } from "../components/FAQList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
export default function ModalScreen() {
  return (
    <View style={styles.container}>
		<Image
        style={{ width: 100, height: 100 }}
		resizeMode="stretch"
        source={require("../assets/images/cardanocoin.png")}
      />
      <Text style={styles.title}>F.A.Q.</Text>
      <View style={styles.bloque}>
	  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>
            ¿Quién conforma el proyecto ORION?
          </Text>
          <Text style={styles.subtitle2}>
            {"\n"}Somos 5 premio estudiantes de DAM del centro N.S. de los Reyes
            - Sagrada Familia, Sevilla.
          </Text>
        </FAQText>

        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>
            ¿Qué nos llevó a desarrollar este proyecto?
          </Text>
          <Text style={styles.subtitle2}>
            {"\n"}La pasión por las nuevas tecnologías y las ganas por innovar
            nos llevaron a embarcarnos en esta aventura.
          </Text>
        </FAQText>

        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>
            ¿En qué se basa el proyecto ORION?
          </Text>
          <Text style={styles.subtitle2}>
            {"\n"}Estamos usando la novedosa tecnología de la blockchain,
            concretamente su implementación en Cardano, ya que es la que mejor
            futuro tiene.
          </Text>
        </FAQText>

        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>
            He escuchado que el proyecto ORION está concienciado con el medio
            ambiente ¿Es esto cierto?
          </Text>
          <Text style={styles.subtitle2}>
            {"\n"}Sí, los integrantes de ORION tenemos una gran consciencia
            medioambiental... ¡incluso tenemos un miembro vegano! Esta es una de las razones por la que elegimos
            Cardano, es una de las criptomonedas más respetuosas con el medio
            ambiente.
          </Text>
        </FAQText>

        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>
            ¿Cuánto podría esperar ganar con vuestro proyecto?
          </Text>
          <Text style={styles.subtitle2}>
            {"\n"}Entre un 4% y un 6% anual, dependiendo de la facturación
            que tengamos. Aparte de esto hay que sumarle el crecimiento de la
            propia criptomoneda ¡¡Todo son beneficios!!
          </Text>
        </FAQText>

        <FAQText style={styles.subtitle}>
          <Text style={styles.subtitle1}>¿Está mi dinero a salvo?</Text>
          <Text style={styles.subtitle2}>
            {"\n"}Sí, el sistema de la blockchain protege tu dinero contra
            hackers, para que tu dinero se viera comprometido se deberían de
            hackear millones de ordenadores a la vez.
          </Text>
        </FAQText>

		</ScrollView>
    </SafeAreaView>

        <BottomTab.Screen
          name="TabOne"
          component={ModalScreen}
          options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
            title: "Home",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Home")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="info-circle"
                  size={25}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
          })}
        />
      </View>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subtitle: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  subtitle1: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    padding: "1%",
    // fontFamily: 'space-mono',
  },
  subtitle2: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "normal",
    // flex: 1,
    backgroundColor: "#eee",
    // alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    // fontFamily: 'space-mono',
  },
  bloque: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
