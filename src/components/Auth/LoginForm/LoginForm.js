import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { styles } from './LoginForm.style'
import { Input, Button, Icon } from '@rneui/base'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './LoginForm.data'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Toast from 'react-native-toast-message'
import { screen } from '../../../utils/screenName'
import { useNavigation } from '@react-navigation/native'

const LoginForm = () => {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const showHidenPassword = () => setShowPassword(prevStade => !prevStade)
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        )
        navigation.navigate(screen.account.account)
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error de inicio de sesión",
          text2: "Intentelo de nuevo mas tarde"
        })
      }
    }
  })
  return (
    <View style={styles.content}>
      <Input
        placeholder='Correo electronico'
        containerStyle={styles.input}
        rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon} />}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input 
        placeholder='Contraseña'
        secureTextEntry={showPassword ? false : true}
        containerStyle={styles.input}
        rightIcon={<Icon type='material-community' name={showPassword ? 'eye-off-outline' : 'eye-outline'} iconStyle={styles.icon} onPress={showHidenPassword} />}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button title='Iniciar sesión' containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting} />
    </View>
  )
}

export default LoginForm