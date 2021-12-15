class Rain {
    mm: number
    dateHour: string
    rainStatus: string | undefined

    constructor(mm: number, dateHour: string) {
        this.mm = mm;
        this.dateHour = dateHour;
        this.rainStatus = this.checkingRain(mm)
    }
    
    checkingRain (mm: number) {  
        if(mm < 0.2)
            return 'Sem Chuva'
        if(mm <= 5)
            return 'Chuva Fraca'
        if(mm <= 25)
            return 'Chuva Moderada'
        if(mm > 25)
            return 'Chuva Forte'    
    }
}

module.exports = { Rain }
