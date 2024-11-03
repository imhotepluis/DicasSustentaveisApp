import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {HistoricoContext} from '../contexts/HistoricoContext';

function Historico() {
  const { historico } = useContext(HistoricoContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Dicas Visualizadas</Text>
      {historico.length > 0 ? (
        <FlatList
          data={historico}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.dica}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.textoVazio}>Nenhuma dica visualizada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#FCC15D',
    borderBottomWidth: 1,
    borderBottomColor: '#0000',
  },
  textoVazio: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Historico;
