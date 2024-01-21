import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react'
import {FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

let imgServer = "https://image.tmdb.org/t/p/w500";
const { width, height } = Dimensions.get('window');


export default function FilmePage({ navigation, route }){

  let [isFavorite, setIsFavorite] = useState(false);

  let filme = route.params.filme;


//chamado uma única vez quando o componente é carregado pela primeira vez
useEffect(() =>{
  initialCheck();
}, [])

  async function initialCheck(){
    let favoritos = await readStore();
    console.log("Leu: ", favoritos);

    // O id deste filme está na lista?
    if ( favoritos.includes(filme.id) ) {
      setIsFavorite(true);
    }
  }

  async function readStore() {
    let data = await AsyncStorage.getItem('favoritos');
    if (data){
      data = JSON.parse(data);
    }else{
      data = [];
    }

    return data;
  }

  async function writeStore(action){
    let favoritos = await readStore();

    if(action == 'add'){
      favoritos.push(filme.id);
    }else if( action == 'remove'){
      favoritos = favoritos.filter(item => item != filme.id);
    }
    console.log('ESCREVEU:', favoritos);

    favoritos = JSON.stringify(favoritos); // Convertendo em string
    await AsyncStorage.setItem('favoritos', favoritos);

  }

  async function Favoritar(){
    if(isFavorite){
      setIsFavorite(false)
      await writeStore('remove')
    }else{
      setIsFavorite(true)
      await writeStore('add')
    }
  }

  return(

    <ScrollView style={styles.container}>


      <View>
        <Image 
          source={{uri: imgServer + filme.backdrop_path}}
          style={styles.poster}
        />
      </View>
      
      <TouchableOpacity style={styles.favIcon} onPress={Favoritar}>
        <FontAwesome
          name='heart'
          size={18}
          color={isFavorite == true ? '#ff0000' : '#333333'}
        
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {filme.title}
      </Text>


      <Text style={styles.text}>
        {filme.overview}
      </Text>
      
      <Text style={styles.text}>
        Lançamento: {filme.release_date}
      </Text>

      <Text style={styles.text}>
        Duração: {filme.runtime} min
      </Text>

      <Text style={styles.text}>
        Nota: {filme.vote_average}
      </Text>

      <TouchableOpacity  style={styles.atoresButton} onPress={() => navigation.navigate("AtoresPage", {filme: filme})}>
        Elenco
        <FontAwesome
          name={"arrow-right"}
          size={12}
          color="#000000"
        />
      </TouchableOpacity>


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
  favIcon: {
    alignSelf: 'end',
    marginTop: 8,
    marginRight: 8
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
    fontSize: 14,
    color: "white",
    textAlign: "left",
    marginTop: 20,
    marginLeft: 10
  },
  atoresButton:{
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap: 5,
    marginTop:20,
    width: width,
    height: 44,
    borderRadius:10
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