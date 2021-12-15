import React, {useState, useEffect} from 'react'
import './styles.scss'
import api from '../../services/api'
import Cards from '../components/Cards'
import Legend from '../components/Legends'


const Home = () => {
    const [rainList, setRainList] = useState([])

    const consumingAPI = async () => {
        try {
            const response = await api.get('rain/all')
            setRainList(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        consumingAPI();
    }, []);


    return (
        <>
            <div className='container-home'>
                <h1 className='title-home'>Previsão de Chuva Horária</h1>
                <form className='district-form'>
                    <label className='label-district' htmlFor="districts"><h3>Bairro: </h3></label>
                    <select className='select-district' id="districts" name="districts">
                        <option value="Pituba/SSA">Pituba/SSA</option>
                        <option value="Itapuã/SSA">Itapuã/SSA</option>
                        <option value="Barra/SSA">Barra/SSA</option>
                        <option value="Patamares/SSA">Patamares/SSA</option>
                    </select>
                </form>
                <Cards api={rainList} />
                <Legend />
            </div>
        </>
    );
}

export default Home;