import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../..'
import { FirebaseContext } from '../../../../../context'
import { checkForUser } from '../../../_lib/auth.handlers'

// for firebase users
const AuthDb = () => {
  const { auth } = useContext(FirebaseContext)
  // uid is the user token assigned from firebase auth
  const [uid, set] = useState(false)
  // if there is a userToken, the uid get sets, which is linked to the /users/{uid} table with all the user info
  useEffect(() => checkForUser(auth, x => set((x && x.uid) || false)), [auth])
  return uid
}

export const AuthProvider = ({ children, locOnly }) => {
  return <AuthContext.Provider value={ locOnly ? { locUser: true } : AuthDb() }>{ children }</AuthContext.Provider>
}


export const AuthCheck = ({ children, AuthCheckUi }) => {
  const { auth } = useContext(FirebaseContext)
  // uid is the user token assigned from firebase auth
  const [uid, set] = useState(false)
  // if there is a userToken, the uid get sets, which is linked to the /users/{uid} table with all the user info
  useEffect(() => checkForUser(auth, x => set((x && x.uid) || false)), [auth])
  return uid ? children : 'no user'
}