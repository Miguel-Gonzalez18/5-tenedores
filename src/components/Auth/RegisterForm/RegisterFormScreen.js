import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Icon, Input } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { screen } from "../../../utils"
import { useFormik } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { styles } from "./RegisterForm.styles"
import { initialValues, validationSchema } from "./RegisterForm.data";

const ReisterFormScreen = () => {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await
        createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        navigation.navigate(screen.account.account)
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: "Error al registrar el usuario"
        })
      }
    }
  })
  const showHidenPassword = () => setShowPassword(prevStade => !prevStade)
  return (
    <View style={styles.content}>
      <Input
        placeholder='Ingresa tu correo'
        containerStyle={styles.inputForm}
        rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon} />}
        onChangeText={(text)=> formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />

      <Input
        placeholder='Contraseña'
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon type='material-community'
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon} onPress={showHidenPassword} />}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder='Repetir contraseña'
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon type='material-community'
        name={showPassword ? "eye-off-outline" : "eye-outline"}
        iconStyle={styles.icon} onPress={showHidenPassword} />}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />

      <Button
        title="Unirse"
        containerStyle={styles.buttom}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}

export default ReisterFormScreen