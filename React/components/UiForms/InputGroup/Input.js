import { UiInput } from "../../UiCommander"
import { validateInput } from "../js/validate"

// inputprops = { value, tabIndex, autoComplete, autoFocus, id}
export const Input = ({ InputUi, inputprops, name, validate, type, required, handlers, setError, fieldError, formData }) => {

  const blur = (e) => {
    const val = e.target.value
    // check for blur handler
    const han = ((handlers && handlers.blur) || false)
    // check for errors
    const haserror = (!val && required) ? 'required' : validateInput(validate, val)
    // check for handlers
    setError(haserror)
    // return value if incoming blur function
    if (val) formData.append(name, val)
    else formData.delete(name)

    return han && han({ [name]: val })
  }

  return (
    <InputUi hasError={ fieldError ? true : undefined } onBlur={ e => blur(e) } { ...{ name, type, ...inputprops } } />
  )
}
