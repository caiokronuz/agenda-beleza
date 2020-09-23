import React from 'react'

import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,Image} from 'react-native';
import Logo from '../../../assets/images/logo.png'
import styles from './styles';

function RegisterPageCompany(){
    return(
        <KeyboardAvoidingView style={styles.container}>

            <View style = {styles.logo}> 
                <Image style = {styles.imageLogo} source={Logo}/>
                <Text style = {styles.text} >Cadastre seu salão!</Text>
            </View>

            <View style={styles.Registrar}>
                <TextInput
                    style = {styles.input}
                    placeholder = "Nome do Salão"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TextInput
                    style = {styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "CNPJ"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TextInput
                    style = {styles.input}
                    placeholder = "Telefone"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Endereço"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Senha"
                    autoCorrect={false}
                    onChange={()=>{}}
                />
                <TextInput
                    style = {styles.input}
                    placeholder = "Confirme sua Senha"
                    autoCorrect={false}
                    onChange={()=>{}}
                />

                <TouchableOpacity style = {styles.btn}>
                    <Text style = {styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default RegisterPageCompany;