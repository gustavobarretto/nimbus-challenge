import React from 'react'
import './styles.scss'
import Card from './Card'

const Cards = ({api}) => {

    return ( 
        <>
            <div className='container-cards'>
                {api.map( ({date, rainConditions, mm}, idx) => {
                    return (
                        <Card
                            key={idx} 
                            date={date}
                            rainConditions={rainConditions}
                            mm={mm}
                        />
                    )
                })}            
            </div>
        </>
     );
}
 
export default Cards;