import React from 'react'
import {Link} from "react-router-dom"

export const Footer = () => {
//  let footerStyle = {
//  // backgroundColor: 'black',
//   //color:'white',
//   // width:'100%',
//   // position:'fixed'
//   position: 'relative',
//   top: '55vh'
//   }
  return (
<> 
<footer id="footer" className="bg-black text-white  text-center">  
  <hr className="mt-0"/>
  
  <div className="text-center">
    <h4>You can find us at</h4>
    </div>
  <hr className="mb-0"/>
  <div className="pb-3 text-center">
   &copy;Copyright 2024
    <Link to='#' className='text-white'>My website</Link> | It is free for use
    
  </div>
  
</footer>
  
</>

  )
}
