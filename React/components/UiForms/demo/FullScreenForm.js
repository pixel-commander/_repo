import { Form } from '../../../components/UiForms'
import { FormUiElements, InputGroupUiElements } from './FullScreenForm.elements'

const formfields = {
  fieldOne: {
    label: 'Field One',
    type: 'text',
    required: true,
    helper: 'helper one'
  },
  fieldTwo: {
    label: 'Field Two',
    type: 'text',
    required: true,
    helper: 'helper two'
  },
  fieldThree: {
    label: 'Field Three',
    type: 'text',
    helper: 'helper three'
  }
}

export const FullScreenForm = () => <Form { ...{
  // send styled component elements
  formSettings: {
    ...FormUiElements,
    formfields,
    formname: 'demo form',
    buttontxt: 'submit form',
    handle: {
      submit: d => console.log({ SubmittedFormData: d })
    }
  },
  inputGroupSettings: {
    ...InputGroupUiElements,
    autofocus: undefined,
    hidefromtab: undefined,
    tabIndexStart: undefined,
    handle: {
      blur: undefined,
      change: undefined,
      focus: undefined
    },
    inputprops: {}
  }

} } />
