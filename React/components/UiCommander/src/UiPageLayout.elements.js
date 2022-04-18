import styled from 'styled-components'
import { UiBlock } from './UiBlock'

// site html 5 elements
export const UiPageLoad = styled(UiBlock)``
export const UiApp = styled(UiBlock)``
export const UiArticle = styled(UiBlock).attrs(() => ({ as: 'article' }))``
export const UiAside = styled(UiBlock).attrs(() => ({ as: 'aside' }))``
export const UiFooter = styled(UiBlock).attrs(() => ({ as: 'footer' }))``
export const UiHeader = styled(UiBlock).attrs(() => ({ as: 'header' }))``
export const UiMain = styled(UiBlock).attrs(() => ({ as: 'main' }))``
export const UiNav = styled(UiBlock).attrs(() => ({ as: 'nav' }))``
export const UiSection = styled(UiBlock).attrs(() => ({ as: 'section' }))``