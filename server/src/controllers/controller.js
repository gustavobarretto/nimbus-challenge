const { Rain } = require('../services/rainStatus.ts')
const { DATA } = require('../fakedb/data')

// Rain Controller
const areAllFieldsValid = (body) => {
    const fields = [body.mm, body.dateHour]
    return fields.every(field => typeof field !== 'undefined' && field !== '')
}

const checkBodyRain = (req, res, next) => {
    if(areAllFieldsValid(req.body)) {
        if(typeof req.body.mm === 'number' && typeof req.body.dateHour === 'string')
            return next()
        
        return res.status(400).json(
            {
                error: true,
                message: 'O milímetro deve ser em números e a hora em formato string'
            }
        )
    }
    res.status(400).json(
        {
            error: true,
            message: 'Todos os campos são obrigatórios'
        }
    )
}

const rainPostController = (req, res) => {

    DATA.rains.push(
        new Rain(
            req.body.mm,
            req.body.dateHour
        )
    )
    res.json(DATA.rains)
}

const rainGetController = (req, res) => {
    res.json(DATA.rains)
}

module.exports = {
    rainPostController,
    rainGetController,
    checkBodyRain
}