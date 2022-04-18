import { useContext } from "react"
import { UserProfileContext } from "../"

// AuthSecion is a deeper authentication check, it requires user login AND user profile with user access
// level optional.  Must be at least logged in, or have a local account with a user profile to pass this.
export const AuthenticateProfile = ({ children, NoProfile, NotAuth, authLevel }) => {
  const user = useContext(UserProfileContext)
  return !user ? 'NoUserProfile' : children
}