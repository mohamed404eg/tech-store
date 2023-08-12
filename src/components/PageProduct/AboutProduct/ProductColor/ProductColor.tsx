import React from 'react'
import "./ProductColor.scss"

type ProductColorPrpos = {
    id: string
}
function ProductColor() {
    return (
        <div className='ProductColorInput'>
            <input type='radio' name='ProductColor' />
            <label htmlFor="ProductColor"></label>
        </div>
    )
}

export default ProductColor