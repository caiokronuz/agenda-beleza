import React, { useState } from 'react'

import api from '../../../services/api'

import {View, Text, TextInput, KeyboardAvoidingView, Image, Alert, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function RegisterPage(){
    const {navigate} = useNavigation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [tel, setTel] = useState('')
    const [data, setData] = useState('')

    async function handleSubmitRegister(){
        const response = await api.post('/clients', {
            "name": name,
            "email": email,
            "pass": pass,
            "telefone": tel,
            "data": data
        })

        if(response.data.id){
            navigate('LoginPage')
        }else{
            Alert.alert("Erro", "Erro no registro, verifique os dados e tente novamente.")
        }
    }

    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style = {styles.logo}> 
                <Image style = {styles.imageLogo} source={Logo}/>
            </View>

            <View style={styles.Registrar}>
                <TextInput
                    style = {styles.input}
                    placeholder = "Nome Completo"
                    autoCorrect={false}
                    onChangeText={text => setName(text)}
                />

                <TextInput
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Senha"
                    autoCorrect={false}
                    onChangeText={text => setPass(text)}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "Telefone"
                    autoCorrect={false}
                    onChangeText={text => setTel(text)}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Data de Nascimento"
                    autoCorrect={false}
                    onChangeText={text => setData(text)}
                />

                <TouchableOpacity style = {styles.btn} onPress={handleSubmitRegister}>
                    <Text style = {styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default RegisterPage