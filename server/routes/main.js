const os = require('os');
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.send({username: os.userInfo().username}));

module.exports = router;