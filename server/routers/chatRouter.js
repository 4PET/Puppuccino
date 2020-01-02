const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getChats, (req, res) => {
    res.status(200).json(res.locals.chats);
});

router.post('/postMessage', chatController.postMessage , (req, res) => {
    res.sendStatus(200);
});


module.exports = router;