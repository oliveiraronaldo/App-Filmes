import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListaFilmes from "./pages/ListaFilmes.jsx";
import FilmePage from "./pages/FilmePage.jsx";
import Atores from "./pages/Atores.jsx";

//criando a pilha de telas
let Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaFilmesPage">
      
        <Stack.Screen
          name="ListaFilmesPage"
          component={ListaFilmes}
          options={{
            title: "Filmes Flix",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        />
        
        <Stack.Screen
          name="FilmePage"
          component={FilmePage}
          options={{
            title: "Filme",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        />

        <Stack.Screen
          name="AtoresPage"
          component={Atores}
          options={{
            title: "Atores",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

