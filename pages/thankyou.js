import Image from 'next/image'
import React from 'react'
const Thankyou = () => {
  return (
    <>
    <div className="container">
        <h1 style={{textAlign:"center"}}>Thank you!</h1>
        <p  style={{textAlign:"center"}}>Your message has been sent.</p>
        <Image src='/thankyou.jpg' height={100} width={900}  style={{
          width: '100%',
          height: 'auto',
          display:'block',
          marginTop:'0px'
        }} alt='thankyou' />
      </div>
    </> 
  )
}
export default Thankyou