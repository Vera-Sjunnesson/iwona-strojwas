import { ReactNode } from 'react'

import TextStyles from './Text.module.css'

export type TextColor =
  | 'default'
  | 'secondary'
  | 'tertiary'

type Props = {
  children: ReactNode
  fontStyle?: 'normal' | 'italic'
  color?: TextColor
  level?: 1 | 2 | 3 | 4
  weight?: 'regular' | 'medium' | 'bold' | 'light'
}

export const Text = ({
  children,
  fontStyle = 'normal',
  color = 'default',
  level = 1,
  weight = 'regular',
}: Props) => {
  const classes = [TextStyles['typography-text']]

  if (fontStyle) {
    classes.push(TextStyles[`typography-text--${fontStyle}`])
  }

  if (color) {
    classes.push(TextStyles[`typography-text--${color}`])
  }

  if (level) {
    classes.push(TextStyles[`typography-text--${level}`])
  }

  if (weight) {
    classes.push(TextStyles[`typography-text--${weight}`])
  }

  return (
    <p className={classes.join(' ')}>
      {children}
    </p>
  )
}
