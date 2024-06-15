import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Register from "./Register";
import Login from "./Login";
import SharedCards from './SharedCards';
import CardManagement from './CardManagement';
import CardRegistration from './CardRegistration'
import DeckRegistration from "./DeckRegistration";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='CardRegistration' component={CardRegistration} />
                <Stack.Screen name='DeckRegistration' component={DeckRegistration} />
                <Stack.Screen name='Tabs' component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export function Tabs(){
    return(
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={
                    { headerShown: false, 
                    tabBarStyle: {backgroundColor: '#FF7F50', height: 60}, 
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                }
                }>
                <Tab.Screen 
                    name='shared-cards' 
                    component={SharedCards} 
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name='server-sharp' color='white' style={{ fontSize: 27 }} />
                        )
                    }
                    }
                />
                <Tab.Screen 
                    name='Home' 
                    component={Home} 
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name='home-sharp' color='white' style={{ fontSize: 27 }} />
                        ),
                    }
                    }
                />
                <Tab.Screen
                    name='CardManagement' 
                    component={CardManagement} 
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name='add-circle-sharp' color='white' style={{ fontSize: 29 }} />
                        ),
                    }
                    }
                />
            </Tab.Navigator>
    )
}