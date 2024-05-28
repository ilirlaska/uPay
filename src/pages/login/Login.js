import { Chart, Check, Logo, Person } from '../../public'
import { Button, Input, Form } from '../../components'
import { loginZodSchema } from '../../types'
import { Link } from 'react-router-dom'

import './login.css'

const leftInfoContainer = ['Transfer', 'Receive', 'Convert']
const rightInfoContainer = [
  'Utility Bills',
  'Phone Service',
  'Online Shopping',
  'Food Delivery',
  'Online Betting',
  'Entertainment',
]

const Login = () => {
  return (
    <div className='onboarding-login'>
      <div className='onboarding-login-left-section'>
        <Logo className='onboarding-login-logo' />
        <div>
          <div className='onboarding-login-from-title'>Welcome back,</div>
          <div className='onboarding-login-from-subtitle'>please enter your details</div>
        </div>
        <Form onSubmit={() => alert('Welcome!!')} schema={loginZodSchema}>
          <Input name='email' label='Email' placeholder='Enter your email' />
          <Input name='password' label='Password' type='password' placeholder='Enter your password' />
          <Button type='submit' className='onboarding-login-form-button'>
            Log in
          </Button>
        </Form>
        <div className='onboarding-login-form-registerNow-button'>
          Don’t have an account? <Link to='/register'>Register Now</Link>
        </div>
      </div>
      <div className='onboarding-login-right-section'>
        <div className='onboarding-login-image-info right'>
          <div className='onboarding-login-image-info-tittle'>Ability to</div>
          <div className='onboarding-login-image-info-body'>
            <div className='onboarding-login-image-info-description-container'>
              {leftInfoContainer.map(item => (
                <div className='onboarding-login-image-info-description'>
                  <Check /> {item}
                </div>
              ))}
            </div>
            <Person />
          </div>
        </div>
        <div className='onboarding-login-image-info left'>
          <div className='onboarding-login-image-info-tittle'>Unlimited Payments</div>
          <div className='onboarding-login-image-info-sub-tittle'>
            Pay from the commodity of your couch or on the go with our seamless solution.
          </div>
          <div className='onboarding-login-image-info-body'>
            <div className='onboarding-login-image-info-description-container'>
              {rightInfoContainer.map(item => (
                <div className='onboarding-login-image-info-description'>
                  <Check /> {item}
                </div>
              ))}
            </div>
            <Chart />
          </div>
          <Link
            to='https://www.google.com/'
            target='_blank'
            rel='noreferrer'
            className='onboarding-login-image-info-sub-tittle'
          >
            Learn more about ePay and it’s services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
