import React from 'react'
import { ButtonClose, Subtitle, Title, ToastContainer } from './styles'

import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  subtitle: string
}

export function Toast({ title, subtitle, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ButtonClose>
        <X size={20} fontWeight={700} />
      </ButtonClose>
    </ToastContainer>
  )
}
