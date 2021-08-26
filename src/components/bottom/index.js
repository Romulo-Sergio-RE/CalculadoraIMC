import React from 'react';
import { Text,View,TouchableHighlight,Alert } from 'react-native';
import StyleCalculadora from './styled';

export default function(props){
    return(
        <View>
            <TouchableHighlight 
                onPress={props.func}
                underlayColor={0}
                activeOpacity={1}
            >
                    <View style={StyleCalculadora.bnt}>
                        <Text style={StyleCalculadora.bntTitulo}>{props.name}</Text>
                    </View>
            </TouchableHighlight>
        </View>
    );
}