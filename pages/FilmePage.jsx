import { View, Text, StyleSheet, Button } from "react-native";

export default function FilmePage({ navigation, route }){

  let filme = route.params.filme;

  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {filme.title}
      </Text>
    </View>
  )
}


let styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
})