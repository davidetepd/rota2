import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Index from './Index.js'; // Tela de login
import Vergrupo from './Vergrupo.js'; // Tela principal
import Header from './Header';
import Criagrupo from './Criagrupo';
import AltCadastro from './AltCadastro';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Inicialmente, logado
  const [currentView, setCurrentView] = useState('main'); // Estado para controlar a visualização

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('main'); // Reseta a visualização ao fazer logout
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleCreateGroup = () => {
    setCurrentView('createGroup'); // Muda a visualização para 'Criar Grupo'
  };

  const handleAlterarCad = () => {
    setCurrentView('Alterarcadastro'); // Muda a visualização para 'Alterar Cadastro'
  };

    return (
    <SafeAreaView style={styles.container}>
      <Header onLogout={handleLogout} onCreateGroup={handleCreateGroup} onAltCadastro={handleAlterarCad} />

      {isLoggedIn ? (
        currentView === 'main' ? (
          <Vergrupo /> // Exibe a tela principal
 ) : currentView === 'createGroup' ? (
          <Criagrupo/> // Exibe a tela de criação de grupo
        ) : currentView === 'Alterarcadastro' ? (
          <AltCadastro/> // Exibe a tela de alteração de cadastro
        )  : null

      ) : (
        <Index onLogin={handleLogin} /> // Exibe a tela de login
      )}
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
});
