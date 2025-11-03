import React from 'react';
import {View} from 'react-native';
import Título from './componentes/Título';
import TelaInicial from './componentes/TelaInicial';

const App = () => {
    return (
        <View>
            <Título/>
            <TelaInicial/>
        </View>
    );
}
export default App;