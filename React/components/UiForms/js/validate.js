const validators = {
  required: (val, message) => !val ? (message || 'required') : false,
  number: (val, message) => Number(val) ? (message || 'numbers only') : false,
  count: (val, compare, message) => val.length > compare ? (message || `${compare} digits or less`) : false
}

export const validateInput = (validate, val) => (val && validate) ? validate(val) : false

export const getFormData = formData => {
  let values
  for (const [k, v] of formData.entries()) {
    values = !values ? { [k]: v } : { ...values, [k]: v }
  }
  return values
}

export const validateForm = (formfields, formData) => {
  let errors, values
  // get form values
  for (const [k, v] of formData.entries()) {
    values = !values ? { [k]: v } : { ...values, [k]: v }
  }

  // check form fields for validation
  Object.entries(formfields).map(([k, { required, validate }]) => {
    let error
    let val = !values ? false : values[k] || false
    // check if required
    error = required && !val ? 'required' : error
    // validate data
    error = val && validate ? validate(validate, val) : error
    if (error) {
      errors = { ...errors, [k]: error }
      //if (values[k]) delete values[k]
    }
    return errors
  })

  return [errors, values]
}