import React, { useState } from 'react'
import './Navbar.scss'
import RightMenu from './RightMenu'

import menus from './menus'
import Navmenu from './Navmenu'
const Navbar = () => {

  



  const [istogle, setistogle] = useState(false)
  
  const handleclick = () => {
    setistogle(!istogle)
  }

  return (
    <div id='Navbar'>

      <div className="navcontent">

        <div className="navcon"> 
        <div className="input-bar">

          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" name='search' id='searchmenu' placeholder='' />

          </div>
          
          </div>
        {
          menus.map((menu) => {
           return <Navmenu menu={menu} /> 
          })
}








        {/* <div className="navcon"> */}



          {/* <div className="input-bar">

            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name='search' id='searchmenu'  placeholder='' />

          </div>
        </div>
        <div className="navcon">
          <button>Categories</button>
        </div>
        <div className="navcon">
          <button>Website Builder</button>
        </div>
        <div className="navcon">
          <button>Today's deals</button>
        </div> */}

      </div>


      <div className="tablet-Nav">
        <div className="navcon">
          <div className="input-bar">

            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name='search' id='searchmenu' placeholder='' />

          </div>
          <div className="bsrs">
            <i class="fa-solid fa-bars"
              onClick={handleclick}



            ></i>
          </div>
         
        </div>

      

        


        {
          istogle && <RightMenu/>
      }


      </div>

    </div>
  )
}

export default Navbar