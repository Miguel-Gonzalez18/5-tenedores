import * as Yup from 'yup'
export function initialValues(){
    return{
        email: "",
        password: ""
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().required("Introduce tu correo electronico").email("Este correo no es valido"),
        password: Yup.string().required("Introduce tu contraseña").min(8, "Esta contraseña no es valida, minimo 8 digítos").strict()
    })
}