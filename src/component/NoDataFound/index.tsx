import React from 'react'
import NoImageFound from '../../images/noImageFound.png'

const NoDataFound = () => {
    return (
        <div>
            <img src={NoImageFound} alt='noDataFound' />
            <p>No Data Found</p>
        </div>
    )
}

export default NoDataFound