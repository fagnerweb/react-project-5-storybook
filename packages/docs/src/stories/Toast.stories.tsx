import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Message/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    subtitle: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            backgroundColor: '$gray900',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
