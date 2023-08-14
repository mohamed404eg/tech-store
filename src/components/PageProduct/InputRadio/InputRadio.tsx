"use client"

import React, { useId } from 'react'

import "./InputRadio.scss"

function InputRadio() {
    const id0 = useId()
    const id1 = useId()
    const id2 = useId()
  return (
    <div className='InputRadio'>


    <div>
        <input type="radio" name="images" id={id0} defaultChecked/>
        <label htmlFor={id0}></label>
    </div>
    <div>
        <input type="radio" name="images" id={id1} />
        <label htmlFor={id1}></label>
    </div>
    <div>
        <input type="radio" name="images" id={id2} />
        <label htmlFor={id2}></label>
    </div>
</div>

  )
}

export default InputRadio