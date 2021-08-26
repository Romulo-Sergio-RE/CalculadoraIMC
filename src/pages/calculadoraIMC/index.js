import React,{ useState } from 'react';
import { Text,View,TextInput,Alert} from 'react-native';
import StyleCalculadora from './styled';
import Bnt from '../../components/bottom/index.js';
import Result from '../../components/resultado/index';
import ImagemIMC from '../../components/imagem/index';

//calculo do IMC PESO / (ALTURA * ALTURA)
export default function(){

    const [altura,setAltura]=useState();
    const [peso,setPeso]=useState();
    const [resultado,setResultado]=useState();

    const calcularIMC =()=>{
        if(peso == 0 || !peso){
            return Alert.alert('Peso','Informe seu Peso');
        }
        if(altura == 0 || !altura){
            return Alert.alert('Altura','Informe sua Altura');
        }
        const resultado = peso /(altura * altura);
        const valor = resultado.toString().slice(0,5);
        setResultado(valor); 
    }
    const limpar =()=>{
        setAltura(null);
        setResultado(null);
        setPeso(null)
    }

    return(
        <View>
            <Text style={StyleCalculadora.titulo}>Calculadora IMC</Text>


            <View style={StyleCalculadora.container}>
                <View>
                    <Text style={StyleCalculadora.tituloInput}>Altura:</Text>
                    <TextInput 
                        style={StyleCalculadora.input}
                        onChangeText={text=>setAltura(text)}
                        value={altura}
                        keyboardType={'number-pad'}
                    />
                </View>

                <View>
                    <Text style={StyleCalculadora.tituloInput}>Peso:</Text>
                    <TextInput 
                        style={StyleCalculadora.input}
                        onChangeText={text=>setPeso(text)}
                        value={peso}
                        keyboardType={'number-pad'}
                    />
                </View>
            </View>
            
            <View style={StyleCalculadora.bntContainer}>
                <Bnt name="Calcular" func={calcularIMC}/>
                <Bnt name="Limpar" func={limpar}/>
            </View>
            
            <ImagemIMC
                pathImagem={require('../../assets/image/calcular-imc.png')}
            />
            <Result result={resultado}/>
        </View>
    );
}