import React from 'react';
import { View,Image } from 'react-native';
import StyleCalculadora from './styled';

export default function(props){
    return(
        <View>
            <Image
                source={props.pathImagem}
                style={StyleCalculadora.image}
            />
        </View>
    );
}