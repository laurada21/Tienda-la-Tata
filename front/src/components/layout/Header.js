import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-2 col-md-3'>
                    <div className='navbar-brand'>
                    <img src='./images/logo4 .png' alt ="Tienda Jose "></img>
                    
                    </div>


                </div>

                    <div className='col-12 col-md-6 mt-2 mt-md-0'>
                        <div className='input-group'>
                            <input
                            type="text"
                            id='search_field'
                            class="form-control"
                            placeholder='¿Que producto busca?'>
                            </input>

                            <div class="input-group-append">
                                <button id='search-btn' class="btn">
                                    <i class="fa fa fa " aria-hidden="true">
                                     Buscar   </i>  

                                </button>
                            </div>
                        </div>

                    </div>
                   <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                    <button className='btn' id='login-bt'>Inicie Sesión
                    </button>
                    <span id='cart' className='ml-3'>carrito</span>
                    <span className='ml-1' id='cart_count'>2</span>
                   </div>

            </nav>

        </Fragment>
    )

}

export default Header