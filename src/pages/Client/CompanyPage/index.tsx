import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Image, Text, View, Picker } from 'react-native';

import logoImg from '../../../assets/images/logo.png';
import styles from './style';

function CompanyPage(){
    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={logoImg} style={styles.logoImg}/>
            </View>

                <Text style={styles.textBold}>Salão de Beleza</Text>
                <Text style={styles.text}>Rua Maria dos Pepeto, 1001</Text>

                <ScrollView style={styles.scView}>
                    <Text style={styles.textBold}>Horarios disponíveis: </Text>

                    <Picker
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione um dia da semana" value=""/>
                    </Picker>

                    <Picker
                        style={styles.picker} 
                    >
                        <Picker.Item label="Selecione um horario" value=""/>
                    </Picker>

                </ScrollView>

                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </RectButton>
                
        </View>
    );
}
 
export default CompanyPage;