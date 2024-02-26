import React from 'react'
import products from './products'
import SingleProduct from './SingleProduct'
const Product = () => {
  return (
      <div id='Product'>
          {
              products.map((product) => {
                  return <SingleProduct product={ product} />
              })
          }

      </div>
  )
}

export default Product