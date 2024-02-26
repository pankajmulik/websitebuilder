import React from 'react'
import './RelatedProduct.scss'
const SingleRProduct = (props) => {
  return (
      <div id='SingleRProduct'>
          

          <div className="product-div">
              

              <div className="prod-img-div">
                <img src={props.rproduct.image} alt="" />
              </div>
              <div className="offer-div">
                  <span>{props.rproduct.discount}</span>   <span>{props.rproduct.time}</span>
              </div>
              <div className="title-div">
                  <p>{props.rproduct.title}</p>
              </div>
              <div className="disc-div">
                  <p>{props.rproduct.description}</p>
              </div>

              <div className="price-div">
                  <p>
                      <span>
                          ${props.rproduct.dprice}
                      </span>
                      <span id='p-price'>
                          ${props.rproduct.price}
                      </span>
                      <span>
                          {props.rproduct.discount}
                      </span>
                  </p>
              </div>

              <div className="deal-btn-div">
                  <button>View Deal</button>
              </div>

          </div>


      </div>
  )
}

export default SingleRProduct