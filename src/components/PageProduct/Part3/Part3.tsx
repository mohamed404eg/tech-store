import React from 'react'



import Image from 'next/image'
import "./Part3.scss"
import Rectangle11 from "../../../../public/images/PageProduct/Rectangle 11.jpg"
import InputRadio from '../InputRadio/InputRadio'
function Part3() {
    return (
        <div className='ProdectPageSngale-part3'>

           
                <div className='chiled0'>
                    <div>
                        <h2>Outplay the Competittion</h2>
                        <div className='desc'>

                        <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        <p> *Performance compared to i7-9700. Specs varies by model.</p>
                        </div>
                    </div>
                    <div className='bacImage'>
                        <Image src={Rectangle11} alt=''></Image>
                    </div>
                </div>
                <div className='inputSlect'>

<InputRadio />
                </div>
           
            
        </div >
    )
}

export default Part3