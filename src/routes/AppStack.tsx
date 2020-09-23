import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const {Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="LandingPage" component={LandingPage}/>
                <Screen name="LoginPage" component={LoginPage} />
                <Screen name="RegisterPage" component={RegisterPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;