import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.view1}>
        <Image
          source={require('./assets/etelogotipo.png')}
          style={styles.logo}
        />
        <Text style={styles.paragraph}>
          Trajeto Seguro
        </Text>
       
        <Text style={styles.label}>Destino:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
        />

        <Text style={styles.label}>Modalidade:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
        />

        <Text style={styles.label}>Criador do grupo:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
        />

        <Text style={styles.label}>Horário de saída:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
        />

         <Text style={styles.label}>Vagas disponíveis de início:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
        />

       

      </View>

   
        <View style={styles.row}>

          <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Link do Grupo</Text>
        </TouchableOpacity>

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
    borderRadius: 10,
    width: 150,
    marginBottom: 50,
    marginHorizontal: 120,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputnome: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#d6dee2',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 370,
  },
  view1: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 200,
    marginBottom: 0,
  },
});
