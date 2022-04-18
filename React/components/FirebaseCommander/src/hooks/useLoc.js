import { useEffect, useState } from 'react'

export const getLoc = dbkey => JSON.parse(localStorage.getItem(dbkey))

export const setLoc = (dbkey, data) => new Promise((resolve, reject) => {
  // write to localsto
  localStorage.setItem(dbkey, JSON.stringify(data))

  // get values to check for match
  let d = JSON.stringify(getLoc(dbkey))
  let dx = JSON.stringify(data)

  // data added, return promise
  return d === dx ? resolve(data) : reject({ error: 'date not saved' })
})

/*================================================ // -----  --  -
/* useLoc is a promised based localstorage listener
/*=____________________________________________==// --- /*/
export const useLoc = (dbkey, refresh, id) => {

  const [loc, set] = useState(false)

  // write changes to localstorage and callback when done
  if (loc) setLoc(dbkey, JSON.stringify(loc))

  // check for dbkey
  useEffect(() => dbkey ? set(getLoc(dbkey)) : set(false), [set, refresh, dbkey])

  const handle = (type, data, res) => {
    switch (type) {
      // writes/overwrites to localsto
      case 'set': {
        let s = id ? { [id]: data } : data
        if (res) res(s)
        return set(s)
      }
      // updates localstorage
      case 'update': {
        // deconstruct variable or set false if there's no data
        let u = !loc ? false : !id ? { ...loc, ...data } : { ...loc }
        if (id) u[id] = { ...u[id], ...data }
        if (res) res(u)
        return set(u)
      }

      default:
        Error('Error in Firebase handler type.  Expexted: set, get, update, add, delete')
    }
  }
  // if requesting an id key for base localstorage entry
  const data = loc ? id ? loc[id] : loc : false

  return [data, handle]

}