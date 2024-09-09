const pool = require('../config/db');

const showOrders = async (req, res) => {
    const client = await pool.connect();

    try {
        const client = await client.query('SELECT * FROM orders');
        if (result.row.length <= 0) {
            return res.status(404).send('No orders yet');
        }
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    } finally {
        client.release()
    }
};

module.exports = { showOrders }