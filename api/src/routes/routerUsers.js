const express = require('express');
const routerUsers = express.Router()

const {postUsers, getUsers} = require('../Handlers/UsersHandlers');

routerUsers.get('/', getUsers)

routerUsers.post('/', postUsers)


module.exports = routerUsers