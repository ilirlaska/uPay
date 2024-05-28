import React from 'react'
import './stepper.css'

const Stepper = ({ steps, selectedIndex, className }) => {
  const classes = ['onboarding-stepper']
  if (className) classes.push(className)

  if (!steps) return null
  return (
    <div className={classes.join(' ')}>
      {steps.map((step, index) => (
        <div key={index} className={`onboarding-step-icon ${index <= selectedIndex ? 'selected' : ''}`}>
          {index <= selectedIndex && step.icon}
        </div>
      ))}
    </div>
  )
}

export default Stepper
