import React from 'react'

import './BlackFridayProduct.css'

import BlackFridayProductItems from './BlackFridayProductItems/BlackFridayProductItem'


function BlackFridayProduct() {
    return (
        <div className="blackFridayProduct">
        <div className="blackFridayProduct__heading">
          <p className="blackFridayProduct__headingTitle">
            Black Friday Deals | Up to 80% Off
          </p>
          <div className="blackFridayProduct__headingTitleMore">
            See All <span className="material-icons">keyboard_arrow_right</span>{" "}
          </div>
        </div>
  
      <div className="blackFridayProduct__row">
      <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
      <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
      <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
      <BlackFridayProductItems productName="CocaCola Bundle of Joy" productPrice="Shs.12,000"/>
  
      </div>
  
      </div>
    )
}

export default BlackFridayProduct
