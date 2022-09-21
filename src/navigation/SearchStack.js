import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from '../utils'
import Search from '../../screens/Search'

const SearchStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.search.search} component={Search} options={{title: "Buscar"}} />
        </Stack.Navigator>
    )
}

export default SearchStack