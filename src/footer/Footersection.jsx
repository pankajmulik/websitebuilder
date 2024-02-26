import React from 'react'
import  { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './footer.scss'
const FooterSection = () => {


    const [value, setValue] = useState('unites states')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
      setValue(value)
    }
  

  return (
    <div id='Footer'>

      <div className="categories">
        <h3>Category</h3>

        <div className="btn-link">
          Web Builder
        </div>
        <div className="btn-link">

          Hosting
        </div>
        <div className="btn-link">

          Data Center
        </div>
        <div className="btn-link">

          Robotic-Automation
        </div>
        

          
        

      </div>
      
      <div className="contact-div">
        <h3>Contact</h3>

        <div className="btn-link">
          Contact
       </div>
        
        <div className="btn-link">

          Terms Of Service
        </div>

      

        <div className="btn-link">
          Categories
        </div>

        <div className="btn-link">

          About
        </div>


         
          
           
         
          
        
      </div>

      
      <div className="country-div">

        <div className="select-div">

          <Select options={options} value={value} onChange={changeHandler} defaultInputValue='United States'/>

        </div>
      </div>

    </div>
  )
}

export default FooterSection