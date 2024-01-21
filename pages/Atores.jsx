import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from "react-native";

let imgServer = "https://image.tmdb.org/t/p/w500";
const { width, height } = Dimensions.get('window');


export default function Atores({ navigation, route }){

  let filme = route.params.filme;

  return(
    <ScrollView style={styles.container}>
      <View>
        <Image 
          source={{uri: imgServer + filme.backdrop_path}}
          style={styles.poster}
        />
      </View>

      <Text style={styles.title}>
        {filme.title}
      </Text>

      <Text style={styles.text}>
        Atores
      </Text>

      <FlatList
          data={filme.credits.cast}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.atores}>
              <Image source={{uri: imgServer + item.profile_path}} style={styles.ator} />

              <Text style={styles.textAtor}>
                {item.name}
              </Text>
            </View>
          )}

      />


    </ScrollView>
  )
}


let styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    backgroundColor: "rgb(10, 10, 10)"
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 10

  },
  poster:{
    width: width,
    height: height/3,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  text:{
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 20
  },
  atores:{
    justifyContent:'center',
    alignItems:'center',
    width: width/2
  },
  ator:{
    width: width/3,
    height: (width/3)*1.5,
    marginBottom:0,
    marginTop: 10
  },
  textAtor:{
    fontSize: 14,
    color: "white",
    textAlign: "center",
    width: width/3
  }
})