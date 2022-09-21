import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es correcto")
      .required("El email es obligatorio"),

    password: Yup.string().required("La contraseña es obligatoria").min(8, "Esta contraseña no es valida, minimo 8 digítos").strict(),
    
    repeatPassword: Yup.string()
      .required("La contraseña es obligatoria").min(8, "Esta contraseña no es valida, minimo 8 digítos").strict()
      .oneOf([Yup.ref("password")], "Las contraseñas tienen que ser iguales"),
  });
}