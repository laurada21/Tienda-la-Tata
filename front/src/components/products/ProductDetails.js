import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

export const ProductDetails = () => {
  return (
    <Fragment>
      <MetaData title="bonbon"></MetaData>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 im-fluid' id='imagen_producto'>
            <img src='../../images/productos/bonbon.png' alt='Imagen_producto' height="450" width="450"></img>
        </div>
        
      <div className='col-12 col-lg-5 mt-5'>
        <h3>BON BON BUM</h3>
        <p id="product_id"> Product #245</p>
      </div>
      
      </div>

    </Fragment>

  )
}
