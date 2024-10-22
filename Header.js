import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
   

  
        <View style={styles.row}>

          <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Novo Grupo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>Atualizar Cadastro</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.buttonr}>
          <Text style={{ color: "white", textAlign: "center", backgroundColor: 'red', borderColor: 'red' }}>Sair</Text>
        </TouchableOpacity>

          </View>



    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: 'white',
    padding: 0,
  },
 
  button: {
    backgroundColor: '#023296',
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },

   buttonr: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },


  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  
  },

});
