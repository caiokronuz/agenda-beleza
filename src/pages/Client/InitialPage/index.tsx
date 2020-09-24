import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles'
import logoImg from '../../../assets/images/logo.png';

function InitialPage(){
    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoImg}/>
                <Text style={styles.textCenter}>Salões que talvez você se interesse!</Text>
            </View>

            <ScrollView style={styles.sview}>
                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>
                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>

                <RectButton style={styles.saloes}>
                    <Text style={styles.saloonTitle}>Salão De Beleza</Text>
                    <Text style={styles.saloonText}>Rua Maria dos Pepeto</Text>
                    <Text style={styles.saloonText}>Horario disponível? Sim!</Text>
                </RectButton>
                
            </ScrollView>

        </View>
    )
}

export default InitialPage;