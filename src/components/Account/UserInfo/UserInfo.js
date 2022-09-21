import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import { styles } from './UserInfo.styles'

export function UserInfo() {
    const { uid, photoURL, displayName, email } = getAuth().currentUser
    const changeAvatar = () => {
        console.log("Cambiar avatar")
    }
    return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{type: "material", name: "person"}}
        source={{uri: photoURL}}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
        <View>
            <Text style={styles.displayName}>{displayName || "Usuario Anonimo"}</Text>
            <Text>{email}</Text>
        </View>
    </View>
  )
}