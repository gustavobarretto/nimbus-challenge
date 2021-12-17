import React from 'react'
import './styles.scss'
import '../../../../utilities.scss'

const Card = ({date, hour, rainConditions}) => {

    return ( 
        <>
            <div className='card-container'>
                <p className='card-date'>{date} - {hour}</p>
                <p className='card-rain' style={rainConditions.style}>{rainConditions.type}</p>

            </div>

        </>
     );
}
 
export default Card;