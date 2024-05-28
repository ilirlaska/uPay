import { Button, Form, Input, Stepper } from '../../components'
import { registerZodSchema } from '../../types'
import { Link, useNavigate } from 'react-router-dom'
import { Logo, StepperIcon } from '../../public'

import './register.css'

const registerSteps = [
  {
    title: 'Step 1',
    icon: <StepperIcon />,
  },
  {
    title: 'Step 2',
    icon: <StepperIcon />,
  },
  {
    title: 'Step 3',
    icon: <StepperIcon />,
  },
  {
    title: 'Step 4',
    icon: <StepperIcon />,
  },
  {
    title: 'Step 5',
    icon: <StepperIcon />,
  },
]

const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    alert('Welcome!!')
    navigate('/')
  }

  return (
    <div className='onboarding-register'>
      <Link to={'/'}>
        <Logo className='onboarding-register-logo' />
      </Link>
      <div className='onboarding-register-section'>
        <div>
          <div className='onboarding-register-from-title'>Welcome back,</div>
          <div className='onboarding-register-from-subtitle'>please enter your details</div>
        </div>
        <Form onSubmit={handleSubmit} schema={registerZodSchema}>
          <Input name='name' label='Name' placeholder='Enter your name' />
          <Input name='surname' label='Surname' placeholder='Enter your surname' />
          <Input name='email' label='Email' placeholder='Enter your email' />
          <Input name='password' label='Password' type='password' placeholder='Enter your password' />
          <Input
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            placeholder='Enter your password again'
          />
          <Button type='submit' className='onboarding-register-form-button'>
            Continue
          </Button>
        </Form>
        <div className='onboarding-register-form-login-button'>
          Don’t have an account? <Link to='/'>Login Now</Link>
        </div>
      </div>
      <Stepper steps={registerSteps} selectedIndex={0} />
    </div>
  )
}

export default Register
