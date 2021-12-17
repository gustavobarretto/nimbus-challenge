const { Promise } = require('bluebird');
const ForecastRepository = require('../repositories/ForecastRepository');
const NeighbourhoodRepository = require('../repositories/NeighbourhoodRepository');

class NeighbourhoodController {
  async show(req, res) {
    const { name } = req.params;
    const neighbourhood = await NeighbourhoodRepository.findByName(name);
    const weathers = await ForecastRepository.findByNeighbourhood(neighbourhood.id);

    res.json({ neighbourhood, weathers });
  }

  async store(req, res) {
    const { name, forecasts } = req.body;

    const neighbourhoodExists = await NeighbourhoodRepository.findByName(name);
    if (!neighbourhoodExists) {
      const neighbourhood = await NeighbourhoodRepository.create(name);
    }

    const neighbourhood = await NeighbourhoodRepository.findByName(name);
    const weathers = await Promise.map(forecasts, async ({ ts, mm }) => {
      const forecast = await ForecastRepository.create(ts, mm, neighbourhood.id);
      return forecast;
    }, { concurrency: forecasts.length });
    res.json({ neighbourhood, weathers });
  }
}

module.exports = new NeighbourhoodController();
