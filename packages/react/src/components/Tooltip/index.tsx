import React, { ReactNode } from 'react'
import { TooltipContainer, TooltipContent, TooltipMessage } from './styles'

export interface TooltipProps {
  message: string
  children: ReactNode
}

export function Tooltip({ message, children }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipContent className="tooltip">
        <TooltipMessage>{message}</TooltipMessage>
      </TooltipContent>
      {children}
    </TooltipContainer>
  )
}
