import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearErrors, getProductDetails } from '../../actions/productActions'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'

export const ProductDetails = () => {
  const { loading, product, error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getProductDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])


  return (
    <Fragment>
      {loading ? <i class=" fa fa-refresh fa-spin fa-3x fa-fw" ></i> : (
        <Fragment>
          <MetaData title={product.nombre}></MetaData>
          <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 im-fluid' id='imagen_producto'>
              <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <Carousel pause='hover'>
                  {product.imagen && product.imagen.map(img => (
                    <Carousel.Item key={img.public_id}>
                      <img className="d-block w-100" src={"../"+img.url} alt={product.nombre}></img>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className='col-12 col-lg-5 mt-5'>
              <h3>{product.nombre}</h3>
              <p id="product_id">ID del Producto {product._id}</p>
              <hr />
              <div className='rating-outer'>
                <div className="rating-inner" style={{ width: `${(product.calificacion / 5) * 100}%` }}></div>
              </div>
              </div>

            </div>
          </div>  

        </Fragment>

      )}
    </Fragment>

  )
}

