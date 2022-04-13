import { useContext, useEffect, useState } from "react"

import { UserProfileContext, AuthContext, FirebaseContext } from "../../"

import { getLoc } from "../hooks/useLoc"
import { useData } from "../hooks/useData"

import { listenToPath } from '../js/db.handlers'

export const UserDb = props => {
  const { db } = useContext(FirebaseContext)
  const uid = useContext(AuthContext)

  // user will contain user profile info like auth level and display name
  const [user, setUser] = useState(uid ? { loading: true } : false)

  // get userId from userTokens table (uid assigned by google auth)
  // if no user is found, there is no profile setup
  useEffect(() => uid
    // get userId from userTokens and checks for user
    ? listenToPath(db, `/userTokens/${uid}/userId`,
      userId => !userId
        // no userId found
        ? setUser(false)
        // send userId to users db for user pofile   
        : listenToPath(db, `/users/${userId}`,
          // set user if profile found or false if not
          x => setUser(x || false)
        )
    )
    // no userToken found, no user logged in
    : setUser(false),
    [uid, db]
  )
  return <UserProfileContext.Provider value={ user } { ...props } />
}

const UserLoc = ({ children }) => {
  // gets users object from localstorage /users then gets the first idkey for userId
  const userId = Object.keys(getLoc('users'))[0] || false
  // gets user from locstorage, userId is used here to follow suit of firebase auth and data
  const [user] = useData(userId ? 'user' : false, children, userId, false)
  return <UserProfileContext.Provider value={ user }>{ children }</UserProfileContext.Provider>
}

export const UserProfileProvider = ({ locOnly, ...props }) => {
  // check for local use only (good for free apps)
  return locOnly ? UserLoc(props) : UserDb(props)
}


