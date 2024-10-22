import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>


<View style= {styles.view1}>

<Image
        source={require('./assets/etelogotipo.png')} // Caminho para a imagem
        style={styles.logo} // Estilos da imagem
      />

      <Text style={styles.paragraph}>
        Faça o login para entrar na plataforma
      </Text>

      <Text style={styles.minorparagraph}>
        Insira seu usuário e senha abaixo
      </Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value=""
        placeholder="Digite seu e-mail"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value=""
        placeholder="Digite seu nome"
      />

      <TouchableOpacity style={styles.button}> Enviar </TouchableOpacity>

</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  minorparagraph: {
    margin: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

    label: {
    marginBottom: 5,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#023296', 
    padding: 10,
    color: "white",
    borderRadius: 10,
    width: 100,
    textAlign: "center",
    
  },

  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#d6dee2',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

view1: {
    flex: 1,
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
  },

   logo: {
    height: 150,
    width:200,
    marginBottom: 0,
  },
});