import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import{Link} from 'react-router-dom'
import { useAlert } from 'react-alert'
export const  Home = ()=> {
  const{loading,products,error}=useSelector(state=> state.products)
  const alert =useAlert();  
  const dispatch=useDispatch();
    useEffect(()=>{
      if(error){
        return alert.error(error)
      }
        dispatch(getProducts());
        alert.success("OK")
    },[dispatch])

  return (
    <Fragment>
      { loading ? <h1>Cargando...</h1>:(
        <Fragment>
        <MetaData title="Lo mejor para su familia ">
      </MetaData>
       <h1 id="cabezado_productos">Ultimos Productos</h1>
       <section id='productos' className="container mt-5"> 
       <div className ='row'>
        {products && products.map(producto=>(
        <div key={producto._id} className='col-sm-12 col-md-6 col-leg-3 my-'>
           <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}>  </img>
              <div className='card-body d-flex flex-column'></div>
                <h5 id='Titulo_producto'>< Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                <div className='rating mt-auto'>
                  <div className='rating-outer'>
                    <div className='rating-inner' style={{width:`${(producto.Calificacion/5)*100}`}}></div>
                    </div>
                      <span id='No_de_opiniones'>{producto.numCalficaciones}Reviews</span>
                      <p className='card-text'>${producto.precio}</p><Link to={`/producto${producto._id}`} id='view_btn'className='btn'btn-block>
                      Ver detalle
                      </Link>
                      
               
                   </div>
                     
                </div>
              </div>))}

       


                      </div>
                      </section>
        </Fragment>

      )}
      
    </Fragment>
  )
}
                      
export default Home 