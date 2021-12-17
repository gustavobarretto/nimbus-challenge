import React from 'react'
import './styles.scss'
import Card from './Card'

const Cards = ({api}) => {

    return ( 
        <>
            <div className='container-cards'>
                {api.map( ({day, hour, rainType}, idx) => {
                    return (
                        <Card
                            key={idx} 
                            date={day}
                            hour={hour}
                            rainConditions={rainType}
                        />
                    )
                })}            
            </div>
        </>
     );
}
 
export default Cards;