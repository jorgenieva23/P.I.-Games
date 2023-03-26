require('dotenv').config();
const { Users } = require('../db');
const { createUsers } = require("../Controllers/GamesController")

const getUsers = async (req, res) => {
    try {
        let userData = await Users.findAll()
        if (userData) res.status(200).json(userData)
        else {
            return res.status(404).send(false)
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const postUsers = async (req, res) => {
    const { name, nickName, password, mail, country } = req.body;
    try {
        let createUser = await Users.create({name, nickName, password, mail, country })
        return res.status(200).send(createUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getUsers, postUsers }