import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdb00'
    },

    logo: {
        marginTop: '18%',
    },

    logoImg: {
        width: 300,
        height: 70,
    },

    textCenter:{
        textAlign: 'center',
    },

    sview:{
        flex: 1,
        width: '80%',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },

    saloes:{
        backgroundColor: '#000',
        width: '90%',
        borderRadius: 7,
        marginTop: 5,
        padding: '5%',    
    },

    saloonTitle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    saloonText: {
        color: '#fff',  
        textAlign: 'center',
    }
})

export default styles;