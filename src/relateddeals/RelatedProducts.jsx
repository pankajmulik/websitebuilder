import React from 'react'
import relatedproducts from './relatedproduct'
import SingleProduct from '../products/SingleProduct'
import SingleRProduct from './SingleRProduct'
const RelatedProducts = () => {
  return (
      <div id='RelatedProducts'>
          {relatedproducts.map((rproduct) => {
              return <SingleRProduct rproduct={ rproduct} />
          })
          
          }
    </div>
  )
}

export default RelatedProducts