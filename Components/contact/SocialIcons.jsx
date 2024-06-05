import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'


import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/ansam.sailh?mibextid=ZbWKwL' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.linkedin.com/in/ansam-salih-7a48a0228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='text-3xl hover:opacity-70' >
              <BsLinkedin/>
              </a>
             
          
             <a target='_blank' href='mailto:ansamsalih89@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons