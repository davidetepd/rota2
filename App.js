import { Text, SafeAreaView, StyleSheet, TextInput, Button, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Index from './Index.js';
import Cadastro from './Cadastro.js';
import Vergrupo from './Vergrupo.js';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>

      <Vergrupo/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  } 
});
