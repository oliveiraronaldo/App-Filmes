import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity, Image} from "react-native";

let imgServer = "https://image.tmdb.org/t/p/w500";

let widthScreen = Dimensions.get("window").width;



export default function FilmeItem({ item }){



  return(
    <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate("FilmePagex", {filme: item})}>
      <Image source={{uri: imgServer + item.poster_path}} />
      <Text style={styles.text}>
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}

let widthPoster = (widthScreen - 32-24 )/3

let styles = StyleSheet.create({
  container:{
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 16
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    width: widthPoster
  },
  poster:{
    width: widthPoster,
    height: widthPoster*1.5
  }
})