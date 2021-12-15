import React from 'react'
import './styles.scss'
import Card from './Card'

const Cards = ({api}) => {

    return ( 
        <>
            <div className='container-cards'>
                {api.map( ({mm, dateHour, rainStatus}, idx) => {
                    return (
                        <Card
                            key={idx} 
                            date={dateHour}
                            rainConditions={rainStatus}
                            mm={mm}
                        />
                    )
                })}            
            </div>
        </>
     );
}
 
export default Cards;