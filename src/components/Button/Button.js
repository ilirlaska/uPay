import { forwardRef } from 'react'

import './button.css'

const themes = {
  primary: 'onboarding-button-primary',
}

const Button = forwardRef(({ children, theme = 'primary', className, ...props }, ref) => {
  const buttonClasses = ['onboarding-button', themes[theme]]
  if (className) buttonClasses.push(className)

  return (
    <button ref={ref} className={buttonClasses.join(' ')} {...props}>
      {children}
    </button>
  )
})

export default Button
