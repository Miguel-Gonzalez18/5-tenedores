import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

// Views
import RestaurantsStack from './RestaurantsStack'
import FavortesStack from './FavortesStack'
import SearchStack from './SearchStack'
import RankingStack from './RankingStack'
import AccountStack from './AccountStack'

//utils
import { screen } from "../utils"

const AppNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({ route })=>({
                tabBarActiveTintColor: '#00a680',
                tabBarInactiveTintColor: '#646464',
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
                headerShown: false
            })}
        >
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantsStack}
                options={{ title: "Restaurantes" }}
            />
            <Tab.Screen name={screen.favorites.tab} component={FavortesStack}
                options={{ title: "Favoritos" }}
            />
            <Tab.Screen name={screen.search.tab} component={SearchStack}
                options={{ title: "Buscar" }}
            />
            <Tab.Screen name={screen.ranking.tab} component={RankingStack}
                options={{ title: "Clasificación" }}
            />
            <Tab.Screen name={screen.account.tab} component={AccountStack}
                options={{ title: "Tu cuenta" }}
            />
        </Tab.Navigator>
    )

    function screenOptions(route, color, size){
        let iconName;

        if(route.name === screen.restaurant.tab){
            iconName = "compass-outline"
        }

        if(route.name === screen.favorites.tab){
            iconName = "heart-outline"
        }

        if(route.name === screen.ranking.tab){
            iconName = "star-outline"
        }

        if(route.name === screen.search.tab){
            iconName = "magnify"
        }

        if(route.name === screen.account.tab){
            iconName = "account-outline"
        }

        return (
            <Icon type='material-community' name={iconName} color={color} size={size}/>
        )
    }
}

export default AppNavigation