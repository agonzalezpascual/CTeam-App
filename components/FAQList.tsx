import { Text, TextProps, View } from './Themed';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Question = (props: TextProps) => {
  return(
    <View style={styles.center}>
      <Text>Hello {props}!</Text>
    </View>
  );
}

export function FAQText(props: TextProps) {
  return <Text {...props} style={[props.style, {
    fontFamily: 'space-mono',
    backgroundColor: "#eee"
  }]} />;
}
