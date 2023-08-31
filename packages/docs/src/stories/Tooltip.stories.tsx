import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

function DateComponet() {
  return (
    <div
      style={{
        width: 'max-content',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingInline: '1.62rem',
        backgroundColor: '#323238',
        borderRadius: '0.375rem',
      }}
    >
      <Text>26</Text>
    </div>
  )
}

export default {
  title: 'Message/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    message: '26 de Outubro - Disponível',
    children: <DateComponet />,
    variant: 'show',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 100,
            alignItems: 'flex-end',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
