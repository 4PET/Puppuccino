const db = require('../models/userModel');

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const fs = require('fs');
const { cryptoKey } = require('../../config');
const User = require('../models/userModel');
const userController = {};

//THIS ISN'T BEING USED AT THE MOMENT
userController.hashPassword = (req, res, next) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            console.log(`${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`, "| USERNAME:", `${req.body.username}`, "| userController.hashPassword | ERROR: ", `${err}`)
            return next(err);
        } else {
            res.locals.userInfo = {
                username,
                password: hash
            };
            return next();
        }
    });
}

userController.createUser = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const text = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING *
    `;
        const params = [username, password];
        const result = await db.query(text, params);
        res.locals.user = result.rows[0];
        next();
    }
    catch (err) {
        next({
            log: `userController.createUser: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.createUser. Check server logs for more details.' }
        });
    }
}

userController.verifyUser = async (req, res, next) => {
    res.locals.userData = [];
    const { username, password } = req.body;
    try {
        const text = `
      SELECT * FROM users
      WHERE username=$1 AND password=$2
    `;
        const params = [username, password];
        const result = await db.query(text, params);
        res.locals.userData[0] = result.rows[0];
        next();
    }
    catch (err) {
        next({
            log: `userController.verifyUser: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.verifyUser. Check server logs for more details.' }
        });
    }
}

userController.getDogInfo = async (req, res, next) => {
    const owner_id = res.locals.userData[0]._id;
    try {
        const text = `
        SELECT * FROM dogs
        WHERE owner_id=$1
        `;
        const params = [owner_id];
        const result = await db.query(text, params);
        res.locals.userData[1] = result.rows[0];
        console.log(res.locals.userData)
        next();
    }
    catch (err) {
        next({
            log: `userController.verifyUser: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.verifyUser. Check server logs for more details.' }
        });
    }
}

userController.saveUserInfo = async (req, res, next) => {
    const { username, userAge, userGender, userBio, userPhoto } = req.body;
    try {
        const text = `
      UPDATE users
      SET age=$2, gender=$3, bio=$4, photo=$5
      WHERE username=$1
    `;
        const params = [username, userAge, userGender, userBio, userPhoto];
        const result = await db.query(text, params);
        next();
    }
    catch (err) {
        next({
            log: `userController.saveUserInfo: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.saveUserInfo. Check server logs for more details.' }
        });
    }
}

userController.saveDogInfo = async (req, res, next) => {
    const { dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, userId, dogNeuteredSpayed, dogBio, dogPhoto } = req.body;
    try {
        const text = `
      INSERT INTO dogs (name, age, gender, breed, size, temperament, owner_id, neutered_spayed, bio, photo)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
        const params = [dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, userId, dogNeuteredSpayed, dogBio, dogPhoto];
        const result = await db.query(text, params);
        // res.locals.dogData = result.rows[0];
        next();
    }
    catch (err) {
        next({
            log: `userController.addDog: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.addDog. Check server logs for more details.' }
        });
    }
}

module.exports = userController