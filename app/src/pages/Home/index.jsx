import React, {useState, useEffect} from 'react'
import './styles.scss'
import api from '../../services/api'
import Cards from '../components/Cards'
import Legends from '../components/Legends'


const Home = () => {
    const [rainList, setRainList] = useState([])
    const [neighbourhoodSelected, setNeighbourhoodSelected] = useState([])

    const treatingDateAndHour = (ts) => {
        const arr = ts.split('T');

        const dayInfo = arr[0].split('-').reverse().join('/').split('').splice(0, 5).join('');
        const hourInfo = arr[1].split('').splice(0, 5).join('').replace(':', 'h');

        return { day: dayInfo, hour: hourInfo}
    }

    const typeOfRain = (mm) => {
        if(mm < 0.2)
            return { type: 'Sem Chuva', style: { color: '#77A238' } }
        if(mm <= 5)
            return { type: 'Chuva Fraca', style: { color: '#2050B8' } }
        if(mm <= 25)
            return {type: 'Chuva Moderada', style: { color: '#A3813C' } }
        if(mm > 25)
            return {type: 'Chuva Forte', style: { color: '#BE3E3D' } }     
    }

    const consumingAPI = async (params) => {
        console.log(params)
        try {
            const response = await api.get(`neighbourhoods/${params}`)
            const arr = response.data.weathers.map( ({ ts, mm }) => {
                const dateHourRain = {
                    day: treatingDateAndHour(ts).day,
                    hour: treatingDateAndHour(ts).hour,
                    rainType: typeOfRain(mm)
                }
                return dateHourRain;
            })
            
            setRainList(arr)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        consumingAPI();
    }, [neighbourhoodSelected]);

    return (
        <>
            <div className='container-home'>
                <h1 className='title-home'>Previsão de Chuva Horária</h1>
                <form className='district-form'>
                    <label className='label-district' htmlFor="districts"><h3>Bairro: </h3></label>
                    <select className='select-district' id="districts" name="districts" onChange={(e) => consumingAPI(e.currentTarget.value)}>
                        <option value="Bairro" >Selecione</option>
                        <option value="Pituba" >Pituba/SSA</option>
                        <option value="Itapua">Itapuã/SSA</option>
                        <option value="Barra">Barra/SSA</option>
                        <option value="Patamares">Patamares/SSA</option>
                    </select>
                </form>
                <div className='container-cards-legends'>
                    <Cards api={rainList} />
                    <Legends />
                </div>
            </div>
        </>
    );
}

export default Home;