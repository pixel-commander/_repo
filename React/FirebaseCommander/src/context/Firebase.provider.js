import { FirebaseContext } from '../../'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

let app, auth, db

export const FirebaseProvider = ({ fireconfig, firedel, locOnly, children }) => {
  // check for locOnly and run init steps for sending
  if (!locOnly) {
    if (!app) app = initializeApp(fireconfig)
    if (!auth) auth = getAuth(app)
    if (!db) db = getDatabase(app)
  }

  return <FirebaseContext.Provider value={ { app, auth, db, locOnly, firedel } }>{ children }</FirebaseContext.Provider>
}