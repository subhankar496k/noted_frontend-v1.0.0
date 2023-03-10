import React from 'react'
import SignupForm from '../components/SignupForm'
import "../pages/styles/SignupPage.scss"

export default function SignupPage() {
  return (
    <div className='signup-page'>
      <h1>Signup</h1>
      <SignupForm/>
    </div>
  )
}
