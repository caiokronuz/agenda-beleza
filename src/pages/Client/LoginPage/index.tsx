import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import {useNavigation} from '@react-navigation/native'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';

import styles from './styles';


import logoImg from '../../../assets/images/logo.png';

function LoginPage(){
    const {navigate} = useNavigation();

    function handleNavigatetoResetPage(){
        navigate('ResetPassPage')
    }

    function handleNavigatetoClientPages(){
        navigate('ClientTabs')
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoimg}/>
            </View>


            <View style={styles.login}>

                <TextInput 
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChange={()=> {}}
                />

                <TextInput 
                    style = {styles.input}  
                    placeholder="Senha"
                    autoCorrect={false}
                    onChange={()=> {}}
                />

                <RectButton style = {styles.btn} onPress={handleNavigatetoClientPages}>
                    <Text style = {styles.btnText}>Acessar</Text>
                </RectButton>

                <View>
                    <TouchableOpacity onPress={handleNavigatetoResetPage}>
                        <Text>Esqueceu a senha? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginPage;