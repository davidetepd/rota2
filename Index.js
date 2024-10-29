import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function Index({ onLogin }) { // Recebe a função onLogin como prop
  const [email, setEmail] = useState(''); // Estado para o email
  const [senha, setSenha] = useState(''); // Estado para a senha

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
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
          value={email}
          placeholder="Digite seu e-mail"
          onChangeText={setEmail} // Atualiza o estado do email
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          placeholder="Digite sua senha"
          secureTextEntry // Oculta a senha
          onChangeText={setSenha} // Atualiza o estado da senha
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}> {/* Chama onLogin ao pressionar */}
          <Text style={{ color: 'white' }}>Enviar</Text>
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
    width: 100,
    alignItems: 'center', // Centraliza o texto do botão
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 200,
    marginBottom: 0,
  },
});
