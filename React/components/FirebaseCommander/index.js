import { AuthContext } from './src/context/Auth.context'
import { UserProfileContext } from './src/context/UserProfile.context'

import { AuthProvider } from './src/context/providers/Auth.provider'
import { UserProfileProvider } from './src/context/providers/UserProfile.provider'

import { useData } from './src/hooks/useData'
import { useLoc } from './src/hooks/useLoc'

import { AuthenticateLogin } from './src/AuthenticateLogin'
import { AuthenticateProfile } from './src/AuthenticateProfile'

export {
  AuthContext,
  UserProfileContext,

  AuthProvider,
  UserProfileProvider,

  useData,
  useLoc,

  AuthenticateLogin,
  AuthenticateProfile
}