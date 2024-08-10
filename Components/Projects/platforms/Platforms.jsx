import React from 'react'
import { platforms } from '../../../Data'

import SubTitle from '../../SubTitle'
import PlatformCar from './PlatformsCard'

const Platforms = () => {

  return (
    <div >
        <SubTitle title =" منصات عملت عليها" />
        <div className='flex justify-center items-center p-4 gap-2 flex-wrap'>
        {platforms.map((project)=>{
            return<PlatformCar data={project} />
        })}
        </div>
    </div>
  )
}

export default Platforms
