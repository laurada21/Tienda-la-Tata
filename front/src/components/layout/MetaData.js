import React from 'react'
import {Helmet} from 'react-helmet'

const MetaData = ({title}) => {
    return(
        <Helmet>
            <title>{`${title} - Tienda La Tata`}</title>
        </Helmet>
    )

}
export default MetaData