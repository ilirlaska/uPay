import { Children, cloneElement, useCallback, useMemo } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import './form.css'

const Form = ({ onSubmit, schema, className, children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })
  const classes = ['onboarding-form']
  if (className) classes.push(className)

  const submitHandler = () => {
    onSubmit()
    reset()
  }

  const registerChildren = useCallback(
    children => {
      return Children.map(children, child => {
        const element = child || {}
        const { type, name, disabled, children: childChildren } = element.props || {}

        if (!type && !name && typeof childChildren === 'string') {
          return element
        }
        if (type === 'submit') {
          return cloneElement(element, { disabled: disabled || isSubmitting })
        }
        if (name) {
          return cloneElement(element, {
            ...register(name),
            error: errors[name]?.message,
            children: registerChildren(childChildren),
          })
        }

        return registerChildren(childChildren)
      })
    },
    [errors, isSubmitting, register]
  )

  const registeredChildren = useMemo(() => registerChildren(children), [registerChildren, children])

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes}>
      {registeredChildren}
    </form>
  )
}

export default Form
