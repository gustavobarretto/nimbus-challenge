const apiFactory = (dateInfo, rainConditionsInfo, mmInfo) => {
    return {
        date: dateInfo,
        rainConditions: rainConditionsInfo,
        mm: mmInfo
    }
}

const api = 
[   
    apiFactory('08/12 - 13h', 'Chuva Forte', 26),
    apiFactory('08/12 - 14h', 'Chuva Moderada', 7),
    apiFactory('08/12 - 15h', 'Chuva Moderada', 25),
    apiFactory('08/12 - 16h', 'Chuva Forte', 35),
    apiFactory('08/12 - 17h', 'Chuva Fraca', 0.9),
    apiFactory('08/12 - 18h', 'Sem chuva', 0.1),
    apiFactory('08/12 - 19h', 'Sem chuva', 0.01)
]

export default api






