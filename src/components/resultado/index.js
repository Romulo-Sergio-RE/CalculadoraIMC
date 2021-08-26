import React from 'react';
import { Text,View,Alert } from 'react-native';
import StyleCalculadora from './styled';
//isNaN?Alert.alert('sddas'):props.result
export default function(props){
    return( 
        <View style={StyleCalculadora.resultadoContainer}>
            <Text style={StyleCalculadora.resultado}>Seu IMC:  
                {
                   props.result
                }
            </Text>
        </View>
    );
}