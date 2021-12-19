const db = require('../../database');

class ForecastRepository {
  async findByNeighbourhood(id) {
    const rows = await db.query('SELECT * FROM forecasts WHERE neighbourhood_id= $1 ORDER BY ts ASC', [id]);
    return rows;
  }

  async create(ts, mm, id) {
    const [row] = await db.query(`
    INSERT INTO forecasts(ts, mm, neighbourhood_id)
    VALUES($1, $2, $3)
    RETURNING *
    `, [ts, mm, id]);
    return row;
  }
}

module.exports = new ForecastRepository();
