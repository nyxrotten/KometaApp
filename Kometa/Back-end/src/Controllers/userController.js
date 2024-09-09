const pool = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
    const client = await pool.connect();

    try {
        const {username, password} = req.body;
        console.log(username, password);

        const result = await client.query('SELECT * FROM admin WHERE username = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(400).json({error: 'User not found.'})
        }
        const user = result.rows[0];
        const validPassword = await user.password;
        if (!validPassword) {
            return res.status(400).json({error: 'Wrong user/password.'})
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: 'Something went wrong.'})
    } finally {
        // client.release();
        console.log("Ok")
    }
};

const register = async (req, res) => {
    const client = await pool.connect();
    try {
        const {address, clientname, username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        if (!address || !clientname || !username || !password) {
            return res.status(400).json({error: 'Check out your data.'});
        }

        const query = 'INSERT INTO clients (address, clientname, username, password) VALUES ($1, $2, $3, $4) RETURNING *'
        
        const values = [address, clientname, username, hashedPassword];
        const result = [await client.query(query, values)];

        const user = result.rows[0];
        const token = jwt.sign({id: user.userid, username: user.username }, process.env.SECRET_KEY, { expiresIn: '20m'})
        res.setHeader('x-auth-token', token);
        res.status(201).json({token, user });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: 'Register failure'})
    } finally {
        client.release();
        console.log("Ok")
    }
}

module.exports = { loginUser, register }