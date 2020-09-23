import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/Client/LandingPage';
import LandingPageCompany from '../pages/Company/LandingPageCompany';
import LoginPage from '../pages/Client/LoginPage';
import RegisterPage from '../pages/Client/RegisterPage';
import RegisterPageCompany from '../pages/Company/RegisterPageCompany';
import ResetPassPage from '../pages/Client/ResetPassPage';


const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="LandingPage" component={LandingPage}/>
                <Screen name="LandingCompany" component={LandingPageCompany} />
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="RegisterPage" component={RegisterPage} />
                <Screen name="RegisterCompany" component={RegisterPageCompany} />
                <Screen name="ResetPassPage" component={ResetPassPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;