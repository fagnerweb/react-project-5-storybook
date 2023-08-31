import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '100%',
  maxWidth: '22.2rem',
  backgroundColor: '$gray800',
  paddingTop: '$3',
  paddingBottom: '$3',
  paddingInline: '$5',
  borderRadius: '$sm',
  border: '1px solid #323238',
  position: 'relative',
})

export const Title = styled('span', {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: 700,
  lineHeight: '160%',
  color: '$white',
  display: 'block',
})

export const Subtitle = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '160%',
  color: '$gray200',
  display: 'block',
})

export const ButtonClose = styled('button', {
  background: 'transparent',
  border: 0,
  fontSize: 0,
  position: 'absolute',
  top: '$3',
  right: '$5',
  cursor: 'pointer',

  svg: {
    color: '$gray200',
  },
})
