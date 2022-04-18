import styled, { css } from 'styled-components'
import { runall } from '../_lib/css-stylers'

export const UiBlock = styled.div`

// check for selected styles first, then check for selected state
  ${({ sel, act, hov, selected, theme, children, ...rest }) =>
    selected
      ? sel && runall({ ...rest, ...sel, theme })
      : act ? css`&:active { ${runall({ ...rest, ...act, theme })}; }`
        : hov ? css`&:hover { ${runall({ ...rest, ...hov, theme })}; } `
          : runall({ ...rest, theme })
  }

  // check for active styles first, then check for active state
  ${({ act, selected, theme }) => act && !selected & css` &:active { ${runall({ ...act, theme })}; } `}
  
  // check for hover styles first, then check for hover state
  ${({ hov, selected, theme }) => hov && !selected & css` &:hover { ${runall({ ...hov, theme })}; } `}

  // media queries
  // first check if item is responsive, then check breakpoints
  // landscape syles
  ${({ land }) => land && css`
    @media (orientation: landscape) {
      ${({ theme, land }) => runall({ theme, ...land })} 
      
      @media (min-width: ${({ theme }) => theme.media.land.sm}) {
        ${({ theme, land }) => land.sm && runall({ theme, ...land.sm })}
      }

      @media (min-width: ${({ theme }) => theme.media.land.md}) {
        ${({ theme, land }) => land.md && runall({ theme, ...land.md })}
      }

      @media (min-width: ${({ theme }) => theme.media.land.lg}) {
        ${({ theme, land }) => land.lg && runall({ theme, ...land.lg })}
      }
    
      @media (min-width: ${({ theme }) => theme.media.land.xl}) {
        ${({ theme, land }) => land.xl && runall({ theme, ...land.xl })}
      }
    }
  `}   

  // portrait syles
  ${({ port }) => port && css`
    @media (orientation: portrait) {
      ${({ theme, port }) => runall({ theme, ...port })} 
      
      @media (min-width: ${({ theme }) => theme.media.port.sm}) {
        ${({ theme, port }) => port.sm && runall({ theme, ...port.sm })}
      }

      @media (min-width: ${({ theme }) => theme.media.port.md}) {
        ${({ theme, port }) => port.md && runall({ theme, ...port.md })}
      }

      @media (min-width: ${({ theme }) => theme.media.port.lg}) {
        ${({ theme, port }) => port.lg && runall({ theme, ...port.lg })}
      }
    
      @media (min-width: ${({ theme }) => theme.media.port.xl}) {
        ${({ theme, port }) => port.xl && runall({ theme, ...port.xl })}
      }
    }
  `}   

`