import React from 'react'

import './ProductItem.css'

function ProductItem() {
    return (
        <div className="productSection">
        <div className="productSection__title">
           <p className="productSection__titleOne">
                In the Meantime Continue to Shop
               </p>
        <p className="productSection__titleTwo">SortBy: </p>
            </div>
        <p className="productSection__productNumber">3000 products found</p>
        </div>        
    )
}

export default ProductItem
