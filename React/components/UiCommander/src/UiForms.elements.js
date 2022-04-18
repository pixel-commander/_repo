import styled from 'styled-components'
import { UiBlock } from './UiBlock'

// form
export const UiInputsArea = styled(UiBlock).attrs(() => ({ className: 'form__inputs-area' }))``
export const UiForm = styled(UiBlock).attrs(() => ({ as: 'form', className: 'form' }))``
export const UiSubmit = styled(UiBlock).attrs(() => ({ as: 'input', type: 'submit', className: 'form__submit' }))``

//input group
export const UiInputGroup = styled(UiBlock).attrs(() => ({ className: 'input-group' }))``
export const UiError = styled(UiBlock).attrs(() => ({ className: 'input-group__helper input-group__meta--error' }))``
export const UiHelper = styled(UiBlock).attrs(() => ({ className: 'input-group__helper' }))``
export const UiLabel = styled(UiBlock).attrs(() => ({ as: 'label', className: 'input-group__label' }))``
export const UiInput = styled(UiBlock).attrs(({ as, autoComplete }) => ({
  as: as || 'input',
  className: 'input-group__input',
  autoComplete: !autoComplete ? 'off' : undefined
}))``