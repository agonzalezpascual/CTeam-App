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
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";

export default function TabFourScreen({
  navigation,
}: RootTabScreenProps<"Wallet">) {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/1"
        //"https://127.0.0.1:5000/stake"
      )
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert("Finally called");
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
		let res = await axios({
			 url: 'https://127.0.0.1:5000/stake',
			 method: 'get',
			 timeout: 8000,
			 headers: {
				 "Access-Control-Allow-Origin": "https://127.0.0.1:5000",
				 'Content-Type': 'application/x-www-form-urlencoded'
			 }
		 })
		 if(res.status == 200){
			 // test for status you want, etc
			 console.log(res.status)
		 }    
		 // Don't forget to return something   
		 return res.data
	 }
	 catch (err) {
		 console.error(err);
	 }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          //.get("https://jsonplaceholder.typicode.com/posts/1")
		  .get("https://127.0.0.1:5000/stake")
          .then(function (response) {
            // handle success
            alert("Post 1 : " + JSON.stringify(response.data));
          }),
        axios
          //.get("https://jsonplaceholder.typicode.com/posts/2")
		  .get("https://127.0.0.1:5000/stake")
          .then(function (response) {
            // handle success
            alert("Post 2 : " + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert("Both requests are now complete");
        })
      );
  };

  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch("https://127.0.0.1:5000/stake", {
        mode: "no-cors",
      });
      console.log(response);
      const json = await response.json();

      JSON.stringify(setData(json.lovelace));
      //setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
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
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            {"\n"}Example of Axios Networking in React Native
          </Text>
          {/*Running GET Request*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingSimpleGetCall}
          >
            <Text>Simple Get Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={getDataUsingAsyncAwaitGetCall}
          >
            <Text>Get Data Using Async Await GET</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={postDataUsingSimplePostCall}
          >
            <Text>Post Data Using POST</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={multipleRequestsInSingleCall}
          >
            <Text>Multiple Concurrent Requests In Single Call</Text>
          </TouchableOpacity>
        </ScrollView>
		<View style={{ flex: 1, padding: 24 }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => <Text>{item.Title}</Text>}
            />
          )}
        </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
    marginTop: 16,
  },
});
