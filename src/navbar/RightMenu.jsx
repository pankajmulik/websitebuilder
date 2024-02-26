import React from 'react'
import Navmenu from './Navmenu'
import menus from './menus'
const RightMenu = () => {
  return (
      <div id='RightMenu'>
          
      {
        menus.map((menu) => {
          return <Navmenu menu={menu} />
        })
      }


    </div>
  )
}

export default RightMenu