const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post(
  "/login",
  userController.getUserInfo,
  userController.getDogInfo,
  (req, res) => {
    res.status(200).json(res.locals.userData);
  }
);

router.post(
  "/verify",
  userController.verifyUser,
  userController.getDogInfo,
  (req, res) => {
    res.status(200).json(res.locals.userData);
  }
);

router.post("/createNewUser", userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post("/createNewDog", userController.createNewDog, (req, res) => {
  res.sendStatus(200);
});

router.post("/saveUserInfo", userController.saveUserInfo, (req, res) => {
  res.sendStatus(200);
});

router.post("/saveDogInfo", userController.saveDogInfo, (req, res) => {
  res.sendStatus(200);
});

router.get(
  "/getOtherDogs",
  userController.getWeight,
  userController.getOtherDogs,
  (req, res) => {
    res.status(200).json(res.locals.dogList);
  }
);

router.post(
  "/matchDogs",
  userController.checkExistingMatch,
  userController.matchDogs,
  (req, res) => {
    console.log("this shoudl be match!", res.locals.results);
    res.status(200).json(res.locals.results);
  }
);

module.exports = router;
