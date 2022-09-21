import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import { styles } from './Register.styles'
import { screen } from '../../../src/utils'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import RegisterFormScreen from '../../../src/components/Auth/RegisterForm/RegisterFormScreen'

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../assets/img/5-tenedores-logo.png")} style={styles.image} />

      <View style={styles.content}>
        <RegisterFormScreen />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen