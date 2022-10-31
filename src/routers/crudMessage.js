const express = require('express');
const router = express.Router();

router.get('/messages', (req, res) => {
    res.send('Hello World!');
});

router.post('/messages', (req, res) => {
    res.send('Hello World from POST!');
});

module.exports = router;