import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {getPosts} from "./api/travel-api";

if(__DEV__) {
  import("./ReactotronConfig")
}
export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);


  return (
    <View style={styles.container}>
      <Text>{posts.length}</Text>
      {
        posts.map(el => <Text key={el.id}>{el.title.rendered}</Text>)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
