import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FirstPage from "./pages/FirstPage.jsx";
import SecondPage from "./pages/SecondPage.jsx";
import ListaFilmes from "./pages/ListaFilmes.jsx";
import FilmePage from "./pages/FilmePage.jsx";

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
          name="SecondPage"
          component={SecondPage}
          options={{
            title: "Segunda página",
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
          component={SecondPage}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
