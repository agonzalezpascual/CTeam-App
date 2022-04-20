import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Pressable } from "react-native";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { MonoText } from "../components/StyledText";
import { FontAwesome } from '@expo/vector-icons';
import { FAQText } from "../components/FAQList";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator<RootTabParamList>();
export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
      <View style={styles.bloque}>
        <FAQText>
          <Text style={styles.subtitle}>
            ¿preguntaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?
          </Text>
          <Text style={styles.subtitle}>
            <br></br>respuesta
          </Text>
        </FAQText>
        <BottomTab.Screen
        name="TabOne"
        component={ModalScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
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

      <MonoText>Pito</MonoText>
    
      <Text style={styles.subtitle2}>
        ¿Quién conforma el proyecto ORION?
        <br></br>
        Somos 5 estudiantes de DAM del centro N.S. de los Reyes - Sagrada
        Familia, Sevilla.
      </Text>
      <Text style={styles.subtitle2}>
        ¿Qué nos llevó a desarrollar este proyecto?
        <br></br>
        La pasión por las nuevas tecnologías y las ganas por innovar nos
        llevaron a embarcarnos en esta aventura.
      </Text>
      <Text style={styles.subtitle2}>
        ¿En qué se basa el proyecto ORION?
        <br></br>
        Estamos usando la novedosa tecnología de la blockchain, concretamente su
        implementación en Cardano, ya que es la que mejor futuro tiene.
      </Text>
      <Text style={styles.subtitle2}>
        He escuchado que el proyecto ORION está concienciado con el medio
        ambiente ¿Es esto verdad?
        <br></br>
        Sí, los integrantes de ORION tenemos una gran consciencia
        medioambiental, esta es una de las razones por la que hemos elegido
        Cardano, es una de las criptomonedas más respetuiosas con el medio
        ambiente.
      </Text>
      <Text style={styles.subtitle2}>
        ¿Cuánto podría esperar ganar con vuestro proyecto?
        <br></br>
        Entre un 4% y un 6% anual, dependiendo de la facturación que tengamos.
        Aparte de esto hay que sumarle el crecimiento de la propia criptomoneda
        ¡¡Todo son beneficios!!
      </Text>
      <Text style={styles.subtitle2}>
        ¿Está mi dinero a salvo?
        <br></br>
        Sí, el sistema de la blockchain protege tu dinero contra hackers, para
        que tu dinero se viera comprometido se deberían de hackear millones de
        ordenadores a la vez.
      </Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subtitle: {
  flex: 1,
    fontWeight: "bold",
  },
  subtitle1: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: "5px",
    padding: "1%",
  },
  subtitle2: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "normal",
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: "5px",
  },
  bloque: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}