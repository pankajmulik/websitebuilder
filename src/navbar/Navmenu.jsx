import React from 'react'
import { Link } from 'react-router-dom'
const Navmenu = (props) => {
    
  return (
      <div>
          
      
          <div className="navcon">
              
           
              <Link to={props.menu.path}>
                  <button>{props.menu.name}</button>
              </Link>
              </div>
             

    </div>
  )
}

export default Navmenu