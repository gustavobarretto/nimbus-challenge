import React from 'react'
import './styles.scss'
import api from '../../api'
import Cards from '../components/Cards'
import Legend from '../components/Legends'


const Home = () => {
    return (
        <>
            <div className='container-home'>
                <h1 className='title-home'>Previsão de Chuva Horária</h1>
                <form className='district-form'>
                    <label className='label-district' htmlFor="districts"><h4>Bairro: </h4></label>
                    <select className='select-district' id="districts" name="districts">
                        <option value="Pituba/SSA">Pituba/SSA</option>
                        <option value="Itapuã/SSA">Itapuã/SSA</option>
                        <option value="Barra/SSA">Barra/SSA</option>
                        <option value="Patamares/SSA">Patamares/SSA</option>
                    </select>
                </form>
                <Cards api={api} />
                <Legend />
            </div>
        </>
    );
}

export default Home;