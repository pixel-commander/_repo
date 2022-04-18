
import { useState } from 'react'
import { InputGroup } from '../InputGroup/InputGroup'
import { validateForm } from '../js/validate'

/*================================================ // -----  --  -
/* TODO: ADD THIS TO DOCS
/*************************************************************** */
/* Form is a component used with UiForms that contains and styls
/* a group with form, submit, inputs area, label, input, error, helper text
/* This will render an uncontrolled input that pushes changes to new FormData object
/*---------------------------------==// --- /*/
/* !!! REQUIRES InputGroupUi !!!
/*---------->
/* USAGE:
/* InputGroupUi - see ./demos/UiFormsDemo.elements for sample
/* FormUi - see ./demos/UiFormsDemo.elements for sample
/* imports to build InputGroupUi { UiInputGroup, UiLabel, UiInput, UiHelper }
/* imports to build FormUi { UiForm, UiSubmit, UiInputsArea }
/*===------------------// ---- / --- --  - /* 


TODO:  Clean this up
incoming settings = {

  // gets sent to RenderForm
  formSettings: {
    FormUi,
    formfields,
    formname: 'demo form',
    buttontxt: 'submit form',
    handle: {
      submit: d => console.log(d)
    }
  },

  // gets sent to Inputs
  inputGroupSettings: {
    InputGroupUi,
    autoFocus: false,
    autoComplete: false,
    tabIndexStart: 5,
    handle: {
      blur: false,
      change: false,
      focus: false
    }
  }
}
/*===-----------------//-*/

// incoming Ui = { HelperUi, LabelUi, InputGroupUi, InputUi }
//=== goes to Input = { name, validate, type, required, value, tabIndex, autoComplete, handlers, setError, error, setValue }
// incoming { InputGroupUi, autoFocus, hidefromtab, tabIndexStart, handle, inputprops, formErrors, setFormErrors, setValue }
const RenderInputs = ({ InputsAreaUi, tabIndexStart, inputprops, formfields, formErrors, autofocus, hidefromtab, data, ...rest }) => {
  const Fields =
    Object.entries(formfields).map(([name, { label, helper, ...input }], i) => {
      // look for incoming error or submit error
      const error = formErrors[name] ? formErrors[name] : false
      // setup tabindex
      i = i + 1
      //update inputprops to spread to attrs
      inputprops.value = data ? (data[name] || undefined) : undefined
      inputprops.tabIndex = hidefromtab ? -1 : (tabIndexStart + i || i)
      inputprops.autoFocus = (!autofocus || hidefromtab) ? undefined : tabIndexStart ? i === tabIndexStart ? true : undefined : i === 1 ? true : undefined
      inputprops.id = name
      return <InputGroup key={ name } { ...{ name, label, error, input, helper, inputprops, ...rest } } />
    })
  return InputsAreaUi ? <InputsAreaUi>{ Fields }</InputsAreaUi> : Fields
}
let formData = new FormData()
// goes to Inputs { InputGroupUi, autoFocus, tabIndexStart, handle, inputprops, formfields, formErrors, setFormErrors }
const RenderForm = ({ FormUi, SubmitUi, InputsAreaUi, formfields, formname, buttontxt, handle, Inputs }) => {
  const [formErrors, setFormErrors] = useState(false)
  // used to update the formData object
  // validates then sends data to handle.submit func if received
  const handleSubmit = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    const submit = handle.submit || false
    const [errors, values] = validateForm(formfields, formData)
    console.log({ errors })
    return !errors ? submit(values) : setFormErrors(errors)
  }

  return (
    <FormUi onSubmit={ e => handleSubmit(e) } id={ formname }>
      <Inputs { ...{ formfields, formErrors, setFormErrors, formData, InputsAreaUi } } />
      <SubmitUi value={ buttontxt } />
    </FormUi>
  )
}
export const Form = ({ formSettings, inputGroupSettings }) => {
  return (
    <RenderForm { ...{
      Inputs: props => <RenderInputs { ...{ ...inputGroupSettings, ...props } } />,
      ...formSettings
    } } />
  )

}

