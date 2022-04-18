import { useContext } from "react"
import { AuthContext, AuthenticateProfile } from "../"

// AuthSection is used to authenticate firebase userToken, it will also pass
// if user is on a local account. this does not supply user profile info.
// if auth level is supplied, it will just be passed to UserProfileSection
export const AuthenticateLogin = ({ LoggedIn, LoggedOut, NotAuth, authLevel }) => {
  const uid = useContext(AuthContext)
  return !uid
    ? (<LoggedOut /> || 'must be logged in')
    : uid.locUser
      ? <LoggedIn />
      : authLevel
        ? <AuthenticateProfile { ...{ authLevel, NotAuth, LoggedIn } } />
        : <LoggedIn />
}