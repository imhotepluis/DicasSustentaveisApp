import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {FavoritosContext} from '../contexts/FavoritoContext';

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas Favoritas</Text>
      {favoritos.length > 0 ? (
        <FlatList
          data={favoritos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.dica}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Nenhuma dica favorita.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#E0F0E9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Favoritos;
