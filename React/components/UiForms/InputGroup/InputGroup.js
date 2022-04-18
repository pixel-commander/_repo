import { useState, useEffect } from 'react'

import { Input } from './Input'
import { Helper } from './Helper'

/*================================================ // -----  --  -
/* InputGroup is a component used with UiForms that contains and styls
/* a group with label, input, error, helper text
/* This will render an uncontrolled input
/*---------------------------------==// --- /*/
/* !!! REQUIRES InputGroupUi !!!
/*---------->
/* USAGE:
/* InputGroupUi - see ./demos/UiFormsDemo.elements for sample
/* imports to build InputGroupUi { UiInputGroup, UiLabel, UiInput, UiHelper }
/*===------------------// ---- / --- --  - /* 

incoming settings = {
  InputGroupUi, // styled component that wraps and styls children
  label, // label text
  helper, // helper text
  formerror, // post submit form errors (callback errors),

  // gets sent to Input, coming in from Form
  input: { 
    name, // data key
    validate: val => func(val), // returns true if error
    type, // input type
    value, // incoming value
    required, // is this required
  }
  inputopts: {
    tabIndex, // tab index for current input
    autoComplete, //if true, auto complete is on, defaults to off
    autofocus, // page loads with first field selected,
    tabIndexStart, // start at a certain tabIndex
  }
  handlers: {
    blur: e => func(e), // what to do if the form blurs, this will trigger after validate
    focus: e => func(e),
    change: val => func(val), // *DO NOT USE* function that runs onChange
  }
}

component settings genereated for Input = {
  setError, // clears the input group error or incoming form error
}

/*===-----------------//-*/

//=== goes to Input = { name, validate, type, required, value, tabIndex, autoComplete, handlers, setError, error }
// incoming Ui = { HelperUi, LabelUi, InputGroupUi, InputUi }
// name, label, input, inputprops, formerror,
export const InputGroup = ({ HelperUi, LabelUi, InputGroupUi, InputUi, name, label, input, error, helper, ...rest }) => {
  const [fieldError, setError] = useState(false)

  useEffect(() => error
    ? setError(error)
    : setError(false), [error])


  return (
    <InputGroupUi>
      { label && <LabelUi htmlFor={ name }>{ label }</LabelUi> }
      <Input { ...{ name, fieldError, setError, InputUi, ...input, ...rest } } />
      <Helper { ...{ fieldError, helper, HelperUi } } />
    </InputGroupUi>
  )
}