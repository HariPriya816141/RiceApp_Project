import React from 'react'
import PolicyCard from './policyandt&c/PolicyCard'
import "../Common/policyandt&c/policy.css"

const PrivacyPolicy = () => {
  return (
    <div className='policy-page'>
      <PolicyCard 
  title="Privacy Policy"
  content={
    <>
      <p>We value your privacy and handle your data with care.</p>
      <p>Your usage data helps us improve user experience.</p>
      {/* Add more sections here */}
    </>
  }
/>

    </div>
  )
}

export default PrivacyPolicy


