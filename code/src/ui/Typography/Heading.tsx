import { ReactNode } from 'react'

import HeadingStyles from './Heading.module.css'

export type HeadingColor =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'strong'
  | 'responsive'


interface Props {
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: HeadingColor
  weight?: 'regular' | 'medium' | 'bold' | 'light'
}

export const Heading = ({
  children,
  className,
  color = 'default',
  level = 1,
  weight = 'regular',
}: Props) => {
  const classes = [HeadingStyles['typography-heading']]

  if (color) {
    classes.push(HeadingStyles[`typography-heading--${color}`])
  }

  if (weight) {
    classes.push(HeadingStyles[`typography-heading--${weight}`])
  }

  if (className) {
    classes.push(className)
  }

  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`

  return <HeadingTag className={classes.join(' ')}>{children}</HeadingTag>
}
