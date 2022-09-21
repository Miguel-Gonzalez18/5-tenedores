import React from 'react'
import { View, } from 'react-native'
import { Button } from '@rneui/base'
import { UserInfo } from '../../../src/components/Account/UserInfo/UserInfo'
import { styles } from './UserLoggedScreen.styles'
import { getAuth, signOut } from 'firebase/auth'

const UserLoggedScreen = () => {
  const logout = async () => {
    const auth = getAuth()
    await
    signOut(auth)
  }
  return (
    <View>
        <UserInfo />
        <Button
          title="Cerrar sesión"
          buttonStyle={styles.btnStyles}
          titleStyle={styles.btnTextStyles}
          onPress={logout} />
    </View>
  )
}

export default UserLoggedScreen