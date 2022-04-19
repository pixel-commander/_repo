/* DEMO AND USAGE AT BOTTOM */

// operations for data helpers
const mathops = {
  add: (amt, acc) => acc = acc + Number(amt),
  subtract: (amt, acc) => acc = Number(acc) - Number(amt),
  mult: (amt, acc) => acc = Number(acc) * Number(amt)
}

//-----//-----------/+/=------------------- -- -    -      -
//  Some of my own data helpers one liners
//-----------/ /----------------/  /-------------- - ---- ------   - --- -
//  USAGE DEMOS AT BOTTOM
//-----//----//------------------- -- -  
// function to do math stuffs on arrays
// math operations come from mathops obj and key is defined by incoming mathop property
const calculateArrKeys = (arr, key, mathop) => !arr ? 0 : arr.reduce((total, item) => (item[key] && Number(item[key])) ? mathops[mathop](item[key], total) : total, 0)

// filter array and return new array with only showKey, or everything but hideKey.  instantly returns [] empty if no data
const filterArr = (data, { showKey, hideKey }) => !data ? [] : data.reduce((arr, item) => ((showKey && item[showKey]) || (hideKey && !item[hideKey])) ? [...arr, item] : arr, [])

// filter object and return new array with only showKey, or everything but hideKey.  instantly returns [] empty if no data
const filterObj = (data, { showKey, hideKey }) => !data ? {} : Object.entries(data).reduce((obj, [key, item]) => ((showKey && item[showKey]) || (hideKey && !item[hideKey])) ? { ...obj, [key]: item } : obj, {})

// make a keyless array from object
export const makeArr = data => !data ? [] : Object.values(data)

// make an object from array using an idKey for Index for object key
export const makeIdKeyObjFromArr = (data, idKey) => data.reduce((obj, item, i) => idKey ? item[idKey] ? { ...obj, [item[idKey]]: item } : { ...obj, [i]: item } : obj, {})

// calculates data and returns number or 0 if no data, detects array, if no array, converts to array first, then does math
export const calcDataKeys = (data, key, mathop) => !data ? 0 : calculateArrKeys(Array.isArray(data) ? data : makeArr(data), key, mathop)

// filters data.  auto detect obj or arr.
// options {showKey: 'key' }, { hideKey, 'key' }
// returns incoming datatype (array or object)
export const filterData = (data, options) => Array.isArray(data) ? filterArr(data, options) : filterObj(data, options)

export const getFormDataValues = (formData, values) => {
  for (const [k, v] of formData.entries()) {
    values = !values ? { [k]: v } : { ...values, [k]: v }
  }
  return values
}



//----------//
/// easy to read version sample
// filter array and return new array with only showKey, or everything but hideKey.  instantly returns [] empty if no data
// for fun
//----------//
export const filterArrFullCode = (data, { showKey, hideKey }) => {
  const reducer = () => {
    return (
      data.reduce((arr, item) => {
        return ((showKey && item[showKey]) || (hideKey && !item[hideKey]))
          ? [...arr, item]
          : arr
      }, [])
    )
  }
  return !data ? [] : reducer()
}


/********************************************
* DEMO DATA AND USAGE ONLY
*********************************************/
const demoArr = [{ a: 1 }, { b: 100, priv: true }, { a: 3 }, { a: 5 }, { a: 10 }]
const demoObj = { cc: { a: 1 }, dd: { a: 1 }, ee: { a: 1 }, ff: { b: 1, priv: true } }
const demoIdKeyArr = [{ name: 'one', val: 1 }, { name: 'two', val: 2 }, { name: 'three', val: 3 }, { name: 'four', val: 4 }]

const showPrivObj = filterData(demoObj, { showKey: 'priv' })
const hidePrivObj = filterData(demoObj, { hideKey: 'priv' })
const showPrivArr = filterData(demoArr, { showKey: 'priv' })
const hidePrivArr = filterData(demoArr, { hideKey: 'priv' })

const addObjVals = calcDataKeys(demoObj, 'a', 'add')
const subObjVals = calcDataKeys(demoObj, 'a', 'subtract')

const addArrVals = calcDataKeys(demoObj, 'a', 'add')
const subArrVals = calcDataKeys(demoObj, 'a', 'subtract')

const idKeyObj = makeIdKeyObjFromArr(demoIdKeyArr, 'name')

console.log({ showPrivArr, hidePrivObj, showPrivObj, hidePrivArr, addObjVals, subObjVals, addArrVals, subArrVals, idKeyObj })
/*** END DEMO DATA ********************/