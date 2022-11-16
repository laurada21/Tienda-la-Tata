import React, { Fragment } from 'react'
import MetaData from './layout/MetaData'

export const  Home = ()=> {
  return (
    <Fragment>
      <MetaData title="Lo mejor para su familia ">
      </MetaData>
       <h1 id="cabezado_productos">Ultimos productos</h1>
       <section id='productos' className="container mt-5"> 
       <div className='row'>
        {/*producto 1*/}
        <div className='col-sm-12 col-md-6 col-leg-3 my-'>
           <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto' src='./images/lentejas.jpg'alt='Lentejas'>
              <div className='card-body d-flex flex-column'>
                <h5 id='Titulo_producto'><a href='http://localhost:3000'>Lentejas Diana</a></h5>
                <div className='rating mt-auto'>
                  <div className='rating-outer'>
                    <div className='rating-inner'>
                      <span id='No_de_opiniones'>3 reiews</span>
                      <p className='card-text'>$4.000</p><a href='http://localhost:3000' id='view_btn'className='btn'btn-block>
                      Ver detalle
                      </a>
                      </div>
                       </div>
                       </div>
                       </div>
                       </img>
                       </div>
                       </div>
                       {/*producto 2*/}
                       <div className='col-sm-12 col-md-6 col-leg-3 my-'>
                        <div className='card p-3 rounded'>
                          <img className='card-img-top mx-auto' src='./images/frijol.jpg'alt='Frijol'>
                          <div className='card-body d-flex flex-column'>
                          <h5 id='Titulo_producto'><a href='http://localhost:3000'>Frijol Diana</a></h5>
                          <div className='rating mt-auto'>
                          <div className='rating-outer'>
                          <div className='rating-inner'>
                          <span id='No_de_opiniones'>4 reiews</span>
                          <p className='card-text'>$5.500</p><a href='http://localhost:3000' id='view_btn'className='btn'btn-block>
                      Ver detalle 
                      </a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </img>
                      </div>
                      </div>
                      {/*producto 3*/}
                      <div className='col-sm-12 col-md-6 col-leg-3 my-'>
                        <div className='card p-3 rounded'>
                          <img className='card-img-top mx-auto' src='./images/arroz.jpg'alt='Arroz'>
                          <div className='card-body d-flex flex-column'>
                          <h5 id='Titulo_producto'><a href='http://localhost:3000'>Arroz Diana</a></h5>
                          <div className='rating mt-auto'>
                          <div className='rating-outer'>
                          <div className='rating-inner'>
                          <span id='No_de_opiniones'>5 reiews</span>
                          <p className='card-text'>$6.500</p><a href='http://localhost:3000' id='view_btn'className='btn'btn-block>
                      Ver detalle 
                      </a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </img>
                      </div>
                      </div>
                       {/*producto 4*/}
                       <div className='col-sm-12 col-md-6 col-leg-3 my-'>
                        <div className='card p-3 rounded'>
                          <img className='card-img-top mx-auto' src='./images/aceite.jpg'alt='Aceite'>
                          <div className='card-body d-flex flex-column'>
                          <h5 id='Titulo_producto'><a href='http://localhost:3000'>Aceite Diana</a></h5>
                          <div className='rating mt-auto'>
                          <div className='rating-outer'>
                          <div className='rating-inner'>
                          <span id='No_de_opiniones'>11 reiews</span>
                          <p className='card-text'>$16.500</p><a href='http://localhost:3000' id='view_btn'className='btn'btn-block>
                      Ver detalle 
                      </a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </img>
                      </div>
                      </div>


                      </div>
                      </section>
                      </Fragment>
                       )
                      }
                      
export default Home 
  
                      
                      
                    
                       
                       
                    
                       
                       
                      
                      
                       
                    
 

