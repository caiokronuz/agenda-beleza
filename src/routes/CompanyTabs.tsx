import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SchedulePageCompany from '../pages/Company/SchedulePageCompany';

const Tab = createBottomTabNavigator();

function CompanyTabs(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#ffdb00',
                    borderTopColor: '#ffdb00',
                    height: 30,
                },
                inactiveTintColor: '#fff',
                activeTintColor: '#000'
            }}
        >
            <Tab.Screen 
                name="Initial" 
                component={SchedulePageCompany} 
                options={{
                    tabBarLabel: 'Página Inicial',
                }}    
            />

            <Tab.Screen 
                name="Schedule" 
                component={SchedulePageCompany} 
                options={{
                    tabBarLabel: 'Agenda de Horarios',
                }}    
            />
            
        </Tab.Navigator>
    );
}

export default CompanyTabs;