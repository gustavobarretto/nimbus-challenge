import React from 'react'
import './styles.scss'

const Legends = () => {

    const legendText = [
        {
        rain: 'Sem Chuva',
        mm: '< 0.2 mm',
        color: {color: '#77A238'}
        },
        {
        rain: 'Chuva Fraca',
        mm: '0.2 a 5.0 mm',
        color: {color: '#2050B8'}
        },
        {
        rain: 'Chuva Moderada',
        mm: '5.1 a 25.0 mm',
        color: {color: '#A3813C'}
        },
        {
        rain: 'Chuva Forte',
        mm: '> 25.0 mm',
        color: { color: '#BE3E3D'}
        },
    ]

    return ( 
        <>
            <div className='container-legend'>
                <h4 className='legend-title'>Legenda</h4>
                <div className='legend-text'>
                    {legendText.map( ({rain, mm, color}, idx) => {
                        return (
                            <>
                                <div className='legend-box'>
                                    <p className='legend-rain' style={color}>{rain}</p>                                    
                                    <p className='legend-mm'>- {mm}</p>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
     );
}
 
export default Legends;