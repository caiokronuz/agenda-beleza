import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Logo from '../../assets/images/logo.png';

function LandingPage(){
    const {navigate} = useNavigation();

    function handleNavigateToRegister(){
        navigate('RegisterPage');
    }

    function handleNavigateToLogin(){
        navigate('LoginPage');
    }

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imageLogo} source={Logo}/>
                <Text>Seja Bem-vindo</Text> 
            </View>

            <View style={styles.userArea}>
                <RectButton style={styles.button} onPress={handleNavigateToLogin}>
                    <Text style={styles.buttonText}>Logar</Text>
                </RectButton>

                <RectButton style={styles.button} onPress={handleNavigateToRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
            </View>

            <View>
                <Text>Esqueceu a senha ?</Text>
            </View>
        </View>
    )
}


export default LandingPage;