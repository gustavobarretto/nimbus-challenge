import React, {useState, useEffect} from 'react'
import './styles.scss'
import '../../../../utilities.scss'

const Card = ({date, rainConditions, mm}) => {
    const [colorRain, setColorRain] = useState({})

    const coloringRain = (param) => {
        if(param < 0.2)
           return { color: '#77A238' }
        if(param <= 5)
            return { color: '#2050B8'}
        if(param <= 25)
            return { color: '#A3813C' }
        if(param > 25)
            return { color: '#BE3E3D'}
    }

    return ( 
        <>
            <div className='card-container'>
                <p className='card-date'>{date}</p>
                <p className='card-rain' style={coloringRain(mm)}>{rainConditions}</p>

            </div>

        </>
     );
}
 
export default Card;