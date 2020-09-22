import React from 'react';

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import styles from './styles';

function LoginPage(){
    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.logo}>
                <Text style={styles.title}>
                    Agenda Beleza
                </Text>
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

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginPage;