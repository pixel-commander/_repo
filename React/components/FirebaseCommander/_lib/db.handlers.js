import {
  ref, // needed for adding user to db
  onValue,
  //update, - todo
  set
} from 'firebase/database'

// gets db table from firebase and listens for changes
export const listenToPath = (db, path, res) => onValue(ref(db, path), snapshot => res(snapshot.val()))

// sets data to db, overwrites value at path, recommend using for deep udates
export const setDbData = (db, path, data) => set(ref(db, path), data)

