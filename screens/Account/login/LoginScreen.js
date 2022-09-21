import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Image } from '@rneui/themed'
import { styles } from "./loginScreen.styles"
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../src/utils'
import LoginForm from '../../../src/components/Auth/LoginForm/LoginForm'

const Login = () => {
  const navigation = useNavigation()
  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }
  return (
    <ScrollView>
      <Image source={require("../../../assets/img/5-tenedores-logo.png")} style={styles.image} />
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.textRegister} >
          Aún no tienes cuenta? <Text onPress={goToRegister} style={styles.btnRegister}>Registrarse</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default Login