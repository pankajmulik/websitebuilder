import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Title.scss'
const PageInMenu = (props) => {
  return (
      <div id='PageInMenu'>
          <div className="menus-in">
          <Link to={props.menus.path}>
          
          <button>
            {props.menus.name}
           </button>
                 
             
          
              </Link>
          </div>
    </div>
  )
}

export default PageInMenu