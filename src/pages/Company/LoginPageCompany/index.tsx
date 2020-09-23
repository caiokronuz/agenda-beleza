import React from 'react';
import {useNavigation} from '@react-navigation/native'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';

import styles from './styles';


import logoImg from '../../../assets/images/logo.png'

function LoginCompany(){
    const {navigate} = useNavigation();

    function handleNavigatetoResetPage(){
        navigate('ResetPassPage')
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Image source={logoImg} style={styles.logoimg}/>
                <Text style={styles.text}>Entre para ter acesso a informações sobre seu salão!</Text>
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

                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btnText}>Acessar</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity onPress={handleNavigatetoResetPage}>
                        <Text>Esqueceu a senha? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginCompany;