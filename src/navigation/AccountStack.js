import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from '../utils'
import Account from '../../screens/Account/Account'
import LoginScreen from '../../screens/Account/login/LoginScreen'
import RegisterScreen from '../../screens/Account/Register/RegisterScreen'

const AccountStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} component={Account} options={{title: "Tu cuenta"}} />
            <Stack.Screen name={screen.account.login} component={LoginScreen} options={{title: "Iniciar Sesion"}}/>
            <Stack.Screen name={screen.account.register} component={RegisterScreen} options={{title: "Crea una cuenta"}}/>
        </Stack.Navigator>
    )
}

export default AccountStack