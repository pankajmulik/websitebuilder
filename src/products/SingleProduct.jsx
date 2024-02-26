import React from 'react'
import './Product.scss'
const SingleProduct = (props) => {

    if (props.product.childrens) {
    return(
        <div id='SingleProduct'>
            <div className="segment-div">
                {props.product.icon} {props.product.segment}
            </div>
            <div className="product-info">


                <div className="product-serial">

                </div>
                <div className="product-image">
                    <img src={props.product.image} alt="Not Found" />
                    <p>{props.product.name}</p>
                </div>




                <div className="product-details">
                    <div className="title-div">
                        <h4>{props.product.title}</h4>
                        {props.product.description}
                    </div>
                    <div className="highlight-div">
                        <h4>Main Highlight</h4>

                     
                        {
                            props.product.childrens.map((child, index) => {
                             
                                return (<div key={index} id='higlight-list'>
                                    
                                    <button>
                                        {
                                            child.rate
                                        }
                                    </button> 
                                    {
                                    child.feature 
                           }
                               
                                </div > 
                           )
                            })
                     }

                    </div>

                    <button>Show more <i class="fa-solid fa-angle-down"></i></button>
                </div>




                <div className="product-reviews">
                    <div className="rating-div">
                        <h2>
                            {props.product.rating}
                        </h2>

                        <p>
                            {
                                props.product.review
                            }
                        </p>

                        <img src={props.product.stars} alt="Not Found" />
                    </div>

                    <div className="view-button" id='v-btn'>
                        <button id='view-btn'>View</button>
                    </div>
                </div>
            </div>

        </div>


    )
}

    else {
        return (
            <div id='SingleProduct'>
                <div className="segment-div">
                    {props.product.icon} {props.product.segment}
                </div>
                <div className="product-info">
             
              
                    <div className="product-serial">

                    </div>
                    <div className="product-image">
                        <img src={props.product.image} alt="Not Found" />
                        <p>{props.product.name}</p>
                    </div>

                

            
                    <div className="product-details">
                        <div className="title-div">
                            <h4>{props.product.title}</h4>
                            {props.product.description}
                        </div>
                        <div className="highlight-div">
                            <h4>Main Highlight</h4>
                        
                       

                            {props.product.highlight}

                        </div>

                        <button>Show more <i class="fa-solid fa-angle-down"></i></button>
                    </div>




                    <div className="product-reviews">
                        <div className="rating-div">
                            <h2>
                                {props.product.rating}
                            </h2>

                            <p>
                                {
                                    props.product.review
                                }
                            </p>

                            <img src={props.product.stars} alt="Not Found" />
                        </div>
                        <div className="view-button">
                            <button id='view-btn'>View </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    
}

export default SingleProduct