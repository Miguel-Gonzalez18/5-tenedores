import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from '../utils'
import Ranking from '../../screens/Ranking'
const RankingStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.ranking.ranking} component={Ranking} options={{title: "Clasificación"}} />
        </Stack.Navigator>
    )
}

export default RankingStack