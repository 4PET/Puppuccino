const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/login', userController.getUserInfo, userController.getDogInfo, (req, res) => {
    res.status(200).json(res.locals.userData);
});

router.post('/verify', userController.verifyUser, userController.getDogInfo, (req, res) => {
    res.status(200).json(res.locals.userData);
});

router.post('/createNewUser', userController.hashPassword, userController.createUser, (req, res) => {
    res.status(200).json(res.locals.user);
});

router.post('/saveUserInfo', userController.saveUserInfo, (req, res) => {
    res.sendStatus(200);
});

router.post('/saveDogInfo', userController.saveDogInfo, (req, res) => {
    res.sendStatus(200);
});

router.get('/getOtherDogs', userController.getOtherDogs, (req, res) => {
    res.status(200).json(res.locals.dogList);
})

router.post('/matchDogs', userController.checkMatch, userController.matchDogs, (req, res) => {
    res.sendStatus(200);
})

module.exports = router;