import ButtonStyles from './Button.module.css'

export type ButtonSize = 'small' | 'medium'

type LinkProps = {
  children: React.ReactNode
  className?: string
  buttonSize?: ButtonSize
  href?: string
}

export const Button = (
  (
    {
      children,
      className,
      buttonSize = 'medium',
      href,
    }: LinkProps
  ) => {
    const classes = [ButtonStyles['btn']]

    if (buttonSize) {
      classes.push(ButtonStyles[`btn--${buttonSize}`])
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

