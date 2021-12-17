const db = require('../database');

class NeighbourhoodRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM neighbourhoods ORDER BY name ASC');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
    SELECT * FROM neighbourhoods WHERE id=$1;
    `, [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.query(`
    SELECT * FROM neighbourhoods WHERE name=$1;
    `, [name]);
    return row;
  }

  async create(name) {
    const [row] = await db.query(`
    INSERT INTO neighbourhoods(name)
    VALUES($1)
    RETURNING *
    `, [name]);
    return row;
  }
}

module.exports = new NeighbourhoodRepository();
