import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { Copyrights } from "../components/Copyrights";
import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container} lightColor="#eee" darkColor="#eee">
		<Text style={styles.title}>ERROR 404!!</Text>
		<Image
          style={{width: 450, height:180}}
          source={require("../assets/images/404.jpg")}
        />
      <Text style={styles.title}>This Is Not the Url You Are Looking For.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
	textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
