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
          Atualize suas informações
        </Text>

       
        <Text style={styles.label}>Nome completo:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
          placeholder="Digite seu nome completo"
        />

         <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.inputnome}
          value=""
    
        />

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>CEP:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
        </View>

    
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Complemento:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
        </View>

        
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cidade:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Estado:</Text>
            <TextInput
              style={styles.input}
              value=""
              placeholder=""
            />
          </View>
        </View>

          <View style={styles.row}>

          <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Voltar</Text>
        </TouchableOpacity>

          </View>


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
    marginHorizontal: 10,
    width: 100,
    marginTop: 20,
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
