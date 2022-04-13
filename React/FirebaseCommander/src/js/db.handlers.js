import {
  // /query, // needed for adding user to db
  //equalTo, // needed for adding user to db
  //onChildAdded, // needed for adding user to db
  ref, // needed for adding user to db
  //getDatabase, // needed for adding user to db
  onValue,
  //remove,
  //update,
  //child,
  set
} from 'firebase/database'

// gets db table from firebase and listens for changes
export const listenToPath = (db, path, res) => onValue(ref(db, path), snapshot => res(snapshot.val()))

export const writeDbPromise2 = ({ items, db, res, rej }) => {
  items = Array.isArray(items) ? items : [items]
  return items.map(({ dbkey, dbid, data }) => {
    return set(ref(db, `${dbkey}/${dbid}`), data)
      .then(() => res())
      .catch(error => rej(error))
  })
}
export const writeDbPromise = ({ items, db, res, rej }) => {
  let er = 0
  items = Array.isArray(items) ? items : [items]
  console.log('writing:')
  console.log(items)
  items.map(({ dbkey, dbid, data }) =>
    set(ref(db, `${dbkey}/${dbid}`), data)
      .then(x => console.log(`${dbkey} added`))
      .catch(e => ++er)
  )
  console.log('items written ')
  console.log(er > 0 ? er + 's' : 'no errors')
  return er > 0 ? rej() : res()
}