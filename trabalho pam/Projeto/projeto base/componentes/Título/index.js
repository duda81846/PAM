import React from 'react';
import {View, Text} from 'react-native';
import estilo from './estilo';

const Título = () => {
    return (
        <View style={estilo.boxTítulo}>
            <Text style={estilo.titulo}>Sorteio DevMedia</Text>
            <Text style={estilo.subtitulo}>Hora de ver quem é o vencedor</Text>
        </View>
    );
}
export default App;