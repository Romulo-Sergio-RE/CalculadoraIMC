import React from 'react';
import { Text,View,SafeAreaView } from 'react-native';
import CalculadoraIMC from './pages/calculadoraIMC/index';

export default function Calculadora(){
    return(
        <SafeAreaView>
            <CalculadoraIMC/>
        </SafeAreaView>
    );
}