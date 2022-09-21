import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import UserGuestScreen from './UserGuestScreen/UserGuestScreen'
import UserLoggedScreen from './UserLoggedScreen/UserLoggedScreen'
import LoadingModal from '../../src/components/Shared/LoadingModal/LoadingModal'

const Account = () => {
  const [hasLogged, setHasLogged] = useState(null)
  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      setHasLogged(user ? true : false)
    })
  },[])
  if (hasLogged === null) {
    return <LoadingModal show text="Cargando..." />;
  }
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
}
export default Account