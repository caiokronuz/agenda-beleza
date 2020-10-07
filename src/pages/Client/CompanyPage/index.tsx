import { RectButton, ScrollView } from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Image, Text, View, Picker } from 'react-native';

import logoImg from '../../../assets/images/logo.png';
import imageLogo from '../../../assets/images/salaoImageLittle.png'
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

function CompanyPage(){

    type FreeHour = {
        id_hours: number,
        id_company: number,
        from_hour: string,
        to_hour: string,
        week_day: number
    }

    const [name, setName] = useState('')
    const [endereco, setEnd] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [data, setData] = useState([])

    const [idHour, setIdHour] = useState(0)

    useEffect(() => {
        loadData();
        loadCompanyHours();
    }, [])

    async function loadData(){
        const id = await AsyncStorage.getItem("id_company")
        const response = await api.get(`/company/${id}`)
        const {data} = response;

        setName(data.name)
        setEnd(data.endereco)
        setEmail(data.email)
        setTel(data.tel)
    }

    async function loadCompanyHours(){
        const id = await AsyncStorage.getItem("id_company")
        const response = await api.get(`/freehours/company/${id}`)
        setData(response.data)
    }

    function weekname(n: number){
        switch(n){
            case 0:
                return "Domingo"
                break;
            case 1:
                return "Segunda-feira"
                break;
            case 2: 
                return "Terça-feira"
                break;
            case 3:
                return "Quarta-feira"
                break;
            case 4:
                return "Quinta-feira"
                break;
            case 5:
                return "Sexta-feira"
                break;
            case 6:
                return "Sabado"
                
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={logoImg} style={styles.logoImg}/>
            </View>

                <Text style={styles.textBold}>{name}</Text>
                <Text style={styles.text}>{endereco}</Text>
                <Text style={styles.text}>{email}</Text>
                <Text style={styles.text}>{tel}</Text>

                <View style={styles.scView}>
                    <Text style={styles.textBold}>Horarios disponíveis: </Text>

                    <View style={styles.pickerView}>
                        <Picker selectedValue={idHour} onValueChange={(h) => {setIdHour(h)}}>
                            <Picker.Item label="Selecione um horario" value={0}/>
                            {data.map((t: FreeHour) => (
                                <Picker.Item key={t.id_hours} label={`${weekname(t.week_day)}: ${t.from_hour} - ${t.to_hour}`} value={t.id_hours}/>
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.viewImageSalao}>
                        <Image source={imageLogo} style={styles.imageSalao}/>
                    </View>
                </View>

                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </RectButton>
                
        </View>
    );
}
 
export default CompanyPage;