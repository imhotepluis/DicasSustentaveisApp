import React, { useState, useEffect, useContext } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FavoritosContext } from '../contexts/FavoritoContext';
import { HistoricoContext } from '../contexts/HistoricoContext';
import dados from '../assets/dados.json';

function Home() {
    const [dicas, setDicas] = useState(null);
    const [data, setData] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const { adicionarFavorito } = useContext(FavoritosContext);
    const { adicionarAoHistorico } = useContext(HistoricoContext);

    const buscarDicaPorData = (dataSelecionada) => {
        if (dicas) {
            adicionarAoHistorico(dicas);
        }

        const indice = dataSelecionada.getDate() % dados.dicas_diarias.length; 
        const dicaSelecionada = dados.dicas_diarias[indice];
        setDicas(dicaSelecionada);
    };

    const handleDateChange = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            setData(selectedDate);
            buscarDicaPorData(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Dica do dia: </Text>
            {dicas ? (
                <Text style={styles.dicaText}>{dicas.dica}</Text>
            ) : (
                <Text>Carregando dica...</Text>
            )}
            <Button style={styles.botao}
                title="Selecionar data"
                color="#678760"
                onPress={() => setShowPicker(true)}
            />
            {showPicker && (
                <DateTimePicker
                    value={data}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            <Button style={styles.botao}
                title="⭐"
                color="#678760"
                onPress={() => adicionarFavorito(dicas)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default Home;
