const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getChats, (req, res) => {
    res.status(200).json(res.locals.chats);
});


module.exports = router;