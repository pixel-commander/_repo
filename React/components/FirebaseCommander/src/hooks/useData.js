import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../../../context'

import { useLoc } from './useLoc'

import { listenToPath } from '../../_lib/db.handlers'

/*================================================ // -----  --  -
/* useData is used when needing to be able to switch between
/* localstorage, firebase, or a global state variable
/*=____________________________________________==// --- /*/

/*---------->
/* USAGE
/* requires const { locOnly} = useContext(SettingsContext)
/*===------------------// ---- / --- --  -
/* const [data, set] = useData('users')
/* const [user] = useData('users', userId)
/*===-----------------//-*/

// check for localstorage only
export const useData = (key, refresh, id, firebase) => {
  const { locOnly } = useContext(FirebaseContext)
  return (!firebase || locOnly) ? LocData(key, refresh, id) : DbData(key, id)
}

/*============================================= // ____// - -- - /
/* DbData is used when firebase is in use
/*==========================================  //======= == */
const DbData = (key, id) => {
  const [data, set] = useState(!key ? false : { loading: true })
  const { db } = useContext(FirebaseContext)

  // combine key and id into path
  // this is done to follow suit with localstorage 
  // and other datamanagers
  let path = !key ? false
    : !id
      ? `/${key}/`
      : `/${key}/${id}/`

  // testing to see which is a better way to load
  useEffect(() => (path && key) ? listenToPath(db, path, dat => set(dat || false)) : set(false), [db, key, id, path])

  return [data, set]
}

const LocData = props => {
  const [data, set] = useLoc(props)
  return [data, set]
}

