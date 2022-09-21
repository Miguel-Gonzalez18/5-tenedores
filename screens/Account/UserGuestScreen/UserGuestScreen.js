import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Button, Image } from '@rneui/base'
import { styles } from '../../../screens/Account/UserGuestScreen/UserGuestScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { screen } from "../../../src/utils/screenName"
const UserGuestScreen = () => {
  const navigation = useNavigation()
  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image style={styles.image} source={require("../../../assets/img/user-guest.png")} />
      <Text style={styles.title}>Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        Como describirias tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido la experiencia.
      </Text>
      <View>
        <Button buttonStyle={styles.btn} title="Ver tu perfil" onPress={goToLogin} />
      </View>
    </ScrollView>
  )
}

export default UserGuestScreen