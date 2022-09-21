import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { screen } from '../utils'
import Restaurants from '../../screens/Restaurants/Restaurants'
import AddRestaurants from '../../screens/Restaurants/AddRestaurants'

const RestaurantsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurant.restaurants} component={Restaurants} options={{title: "Restaurantes"}} />
            <Stack.Screen name={screen.restaurant.addRestaurant} component={AddRestaurants} options={{title: "Nuevo restaurante"}} />
        </Stack.Navigator>
    )
}

export default RestaurantsStack