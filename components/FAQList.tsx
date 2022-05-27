import { Text, TextProps, View } from './Themed';
import { StyleSheet } from 'react-native';

const Question = (props: TextProps) => {
  return(
    <View style={styles.center} lightColor="#eee" darkColor="#eee">
      <Text>Hello {props}!</Text>
    </View>
  );
}

export function FAQText(props: TextProps) {
  return <Text {...props} style={[props.style, {
    backgroundColor: "#eee"
  }]} />;
}


const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: "1%",
	  backgroundColor: "#eee",
	},
	scrollView: {
	  marginHorizontal: 20,
	},
  })
