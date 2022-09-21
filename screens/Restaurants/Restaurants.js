import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { screen } from '../../src/utils'

const Restaurants = (props) => {
  const { navigation } = props
  return (
    <View>
        <Text>Restaurants</Text>
        <Button title='Crear un restaurante' onPress={() => navigation.navigate(screen.restaurant.addRestaurant)} />
    </View>
  )
}

export default Restaurants