import {
  GoogleAuthProvider, // needed for LoginWIthGooglePopup
  signInWithPopup, // needed for LoginWIthGooglePopup
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'


// checks for logged in userToken
export const checkForUser = (auth, res) => onAuthStateChanged(auth, user => res(user))

// logs out current user
export const signOutUser = auth => signOut(auth)

// login with email and password via form
export const loginWithEmail = ({ email, password, auth }) => signInWithEmailAndPassword(auth, email, password)

// makes a new email account and returns promise when complete
export const newEmailAccount = ({ email, password, auth }) => createUserWithEmailAndPassword(auth, email, password)

// function for button to trigger gmail login popup.  this has problems on android.  
export const loginWithGooglePopup = auth => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(result => {
      GoogleAuthProvider.credentialFromResult(result)
      return result.user
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error)
      return error
    })
}

