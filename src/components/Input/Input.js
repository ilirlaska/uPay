import { forwardRef } from 'react'
import { Error } from '../'

import './input.css'

const Input = ({ label, error, className, wrapperClassName, ...rest }, ref) => {
  const wrapperClasses = ['onboarding-input-container']
  const classes = ['onboarding-input']
  if (className) classes.push(className)
  if (error) classes.push('error')
  if (wrapperClassName) wrapperClasses.push(wrapperClassName)

  return (
    <div className={wrapperClasses.join(' ')}>
      {label && <label className='onboarding-input-label'>{label}</label>}
      <input ref={ref} className={classes.join(' ')} {...rest} />
      {error && <Error>{error}</Error>}
    </div>
  )
}

export default forwardRef(Input)
