import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitialPage from '../pages/Client/InitialPage';
import SchedulePage from '../pages/Client/SchedulePage';
import PerfilPage from '../pages/Client/PerfilPage';

const Tab = createBottomTabNavigator();

function ClientTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Initial" component={InitialPage} />
            <Tab.Screen name="Schedule" component={SchedulePage} />
            <Tab.Screen name="Perfil" component={PerfilPage} />
        </Tab.Navigator>
    );
}

export default ClientTabs;