import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from '../utils'
import Favorite from '../../screens/Favorite'

const FavortesStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.favorites.favorites} component={Favorite} options={{title: "Favoritos"}}/>
        </Stack.Navigator>
    )
}

export default FavortesStack