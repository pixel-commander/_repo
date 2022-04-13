import { useContext } from "react"
import { AuthContext, UserProfileContext } from "../"

// AuthSection is used to authenticate firebase userToken, it will also pass
// if user is on a local account. this does not supply user profile info.
// if auth level is supplied, it will just be passed to UserProfileSection
export const AuthSection = ({ children, NotLoggedIn, NotAuth, authLevel }) => {
  const uid = useContext(AuthContext)
  return !uid
    ? false
    : uid.locUser
      ? children
      : authLevel
        ? <UserProfileSection { ...{ authLevel, NotAuth, children } } />
        : children
}

// AuthSecion is a deeper authentication check, it requires user login AND user profile with user access
// level optional.  Must be at least logged in, or have a local account with a user profile to pass this.
export const UserProfileSection = ({ children, NoProfile, NotAuth, authLevel }) => {
  const user = useContext(UserProfileContext)
  return !user ? 'NoUserProfile' : children
}