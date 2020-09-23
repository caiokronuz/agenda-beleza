import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/LandingPage';
import LandingPageCompany from '../pages/LandingPageCompany';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPassPage from '../pages/ResetPassPage';


const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="LandingPage" component={LandingPage}/>
                <Screen name="LandingCompany" component={LandingPageCompany} />
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="RegisterPage" component={RegisterPage} />
                <Screen name="ResetPassPage" component={ResetPassPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;