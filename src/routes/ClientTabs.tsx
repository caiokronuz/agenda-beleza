import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitialPage from '../pages/Client/InitialPage';

const Tab = createBottomTabNavigator();

function ClientTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Initial" component={InitialPage} />
            <Tab.Screen name="Compromisses" component={InitialPage} />
            <Tab.Screen name="Perfil" component={InitialPage} />
        </Tab.Navigator>
    );
}

export default ClientTabs;