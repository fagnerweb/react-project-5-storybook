import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  width: 'max-content',
  position: 'relative',
  '&:hover > .tooltip': {
    visibility: 'visible',
    opacity: 1,
    transform: 'translateX(-50%) translateY(4%)',
  },
})

export const TooltipContent = styled('div', {
  position: 'absolute',
  bottom: '80%',
  left: '50%',
  visibility: 'hidden',
  opacity: 0,
  transform: 'translateX(-50%)',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  paddingTop: '$3',
  paddingBottom: '$3',
  paddingInline: '$4',
  transition: '200ms',
  '&::before': {
    content: '',
    display: 'block',
    width: 32,
    height: 32,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)',
    backgroundColor: '$gray800',
    zIndex: -1,
  },
})

export const TooltipMessage = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  textAlign: 'center',
  fontWeight: 500,
  color: '$gray100',
  whiteSpace: 'nowrap',
  lineHeight: '140%',
  letterSpacing: '-0.00563rem',
})
