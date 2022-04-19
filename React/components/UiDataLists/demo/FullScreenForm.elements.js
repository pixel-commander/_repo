//import styled from 'styled-components'
import { UiLabel, UiInput, UiInputGroup, UiForm, UiHelper, UiInputsArea, UiSubmit } from '../../../components/UiCommander'
import { BtnSubmitFooter } from '../../buttons/BtnFooter/BtnFooter'
export const FormUiElements = {
  FormUi: props => <UiForm gtr='1fr auto' fullh { ...props } />,
  SubmitUi: UiSubmit,
  InputsAreaUi: UiInputsArea
}

export const InputGroupUiElements = {
  HelperUi: props => <UiHelper fnt='.8em' gr='3' gc='1' p='md'  { ...props } />,
  LabelUi: props => <UiLabel fnt='.9em' gr='1' gc='1' p='md'  { ...props } />,
  InputGroupUi: props => <UiInputGroup gtr='auto auto auto' mb='md' { ...props } />,
  InputUi: props => <UiInput nobgc rounded
    dashed='mainLighter'
    gr='1 / span 3' gc='1'
    fnt='lg'
    pt='1.7rem' pb='1.7rem' pl='md' pr='md'
    c='main' { ...props } />,
}