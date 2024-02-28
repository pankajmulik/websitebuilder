import React from 'react'
import PageInMenu from './pagemenu/PageInMenu';
import inpagemenu from './pagemenu/menu'
import './style/Title.scss';
const Title = () => {

  const date = new Date();
  const current = date.getDate()
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div id='Titles'>

      <h1>Best Website Builders in US</h1>


      <div className="update-status">

        <div className="dates">
          <p>
            <span>

              <i class="fa-solid fa-check"></i> 
              
</span> last updated -{current}/{month}/{year}
          </p>
        </div>
        <div className="advertise">

         
          <p>
            <span>
              <i class="fa-solid fa-info"></i>
            </span>
            Advertising Disclosure</p>
        </div>

        <div id="relevance-div">
          <select name="relevance" id="relevance">
            <option value="relevance">Top Relevence</option>

            <option value="relevance">Trending</option>

          </select>
        </div>
      </div>

      <div className="second-nav">
        {
          inpagemenu.map((menus) => {
            return <PageInMenu menus={menus} />
          })
        }
      </div>
      
      <div className="navigation-div">
      </div>

    </div>
  )
}

export default Title