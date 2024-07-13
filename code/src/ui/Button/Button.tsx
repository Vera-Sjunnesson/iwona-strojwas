import ButtonStyles from './Button.module.css'

export type ButtonType =
  | 'primary'
  | 'secondary'

export type ButtonSize = 'small' | 'medium'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  buttonSize?: ButtonSize
  type?: ButtonType
  href?: string
}

export const Button = (
  (
    {
      children,
      className,
      buttonSize = 'medium',
      type = 'primary',
      href,
    }: ButtonProps
  ) => {
    const classes = [ButtonStyles['btn']]

    if (buttonSize) {
      classes.push(ButtonStyles[`btn--${buttonSize}`])
    }

    if (type) {
      classes.push(ButtonStyles[`btn--${type}`])
    }

    if (className) {
      classes.push(className)
    }
  
    return (
      <a href={href} className={classes.join(' ')}>
        {children}
      </a>
    )
  }
)

