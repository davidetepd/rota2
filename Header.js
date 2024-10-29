import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Header({ onLogout, onCreateGroup, onAltCadastro}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onCreateGroup} style={styles.button}>
        <Text style={{ color: "white", textAlign: "center" }}>Criar Grupo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress ={onAltCadastro} style={styles.button}>
        <Text style={{ color: "white", textAlign: "center" }}>Atualizar Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onLogout} style={styles.buttonr}>
        <Text style={{ color: "white", textAlign: "center" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
