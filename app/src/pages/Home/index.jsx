import React, {useState, useEffect} from 'react'
import './styles.scss'
import api from '../../services/api'
import Cards from '../components/Cards'
import Legends from '../components/Legends'


const Home = () => {
    const [rainList, setRainList] = useState([])
    const [neighbourhoodSelected, setNeighbourhoodSelected] = useState([])

    const consumingAPI = async (params) => {
        try {
            const response = await api.get(`rains/${params}`)
            setRainList(response.data)
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
                        <option value="Itapuã">Itapuã/SSA</option>
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