import React from 'react'

import "./Part5.scss"
import Image from 'next/image'
import Group17 from "../../../public/images/PageProduct/Group 17.svg"
import Group16 from "../../../public/images/PageProduct/Group 16.svg"
import Group15 from "../../../public/images/PageProduct/Group 15.svg"
import Group14 from "../../../public/images/PageProduct/Group 14.svg"
function Part5() {
  return (
    <div className='PageProduct-Part5'>
      <div className='container'>

      <h2>Featues</h2>
      <p className='h2-p'>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
   

   <div className='Part5-features-group'>
    <div className='Part5-features'>
      <Image src={Group17} alt=''></Image>
      <span><span>Intel® Core™ i7</span> processor with the upmost computing power to bring you an unparalleled gaming experience.</span>
    </div>
    <div className='Part5-features'>
      <Image src={Group16} alt=''></Image>
      <span>The new <span>GeForce® RTX SUPER™ Series</span> has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</span>
    </div>
    <div className='Part5-features'>
      <Image src={Group15} alt=''></Image>
      <span>Unleash the full potential with the latest <span>SSD technology</span>, the NVM Express. 6 times faster than traditional SATA SSD.</span>
    </div>
    <div className='Part5-features'>
      <Image src={Group14} alt=''></Image>
      <span>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</span>
    </div>
   </div>
      </div>
   
    </div>
  )
}

export default Part5