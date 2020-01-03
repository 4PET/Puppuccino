const db = require('../models/userModel');

const bcrypt = require('bcrypt');
const userController = {};


userController.createUser = (req, res, next) => {
    let { username, password } = req.body;
    try {
        const text = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING *
    `;
      bcrypt.hash(password, 10, async function(err, hash) {
        const params = [username,hash];
        const result =  await db.query(text,params)
        res.locals.user = result.rows[0];
        console.log('in UserController ----------- THIS IS THE NEW USER', res.locals.user)
        next();
      })
    }
    catch (err) {
        next({
            log: `userController.createUser: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.createUser. Check server logs for more details.' }
        });
    }
}

userController.verifyUser =  (req, res, next) => {
    res.locals.userData = [];
    const { username, password } = req.body;

    const text = `
    SELECT username, password FROM users
    WHERE username=$1
    `;

    const params = [username];

    db.query(text, params)
    .then(data => {
      if(data.rows.length === 0) {
        return res.status(404).json({nouser : 'no user found'});
      }
      res.locals.userData[0] = data.rows[0];

      res.locals.username = data.rows[0].username;
      const hash = data.rows[0].password;
     

      bcrypt.compare(password, hash, function(err, result) {
        console.log('inside compare')
        if (err) {
          console.log('some error')
          return next({error: err})
        } else if(result) {
        console.log('Password correct')
        return next()
        } else {
          console.log('Password wrong')
         res.status(403).json('Wrong password');
        } 
      });
    })
    .catch(err => {
      console.log('Error in userController.verifyUser', err)
      return next({ error: err });
    })
}

userController.createNewDog = async (req, res, next) => {
    const { dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, userId, dogNeuteredSpayed, dogBio, dogPhoto } = req.body;
    console.log( dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, userId, dogNeuteredSpayed, dogBio, dogPhoto);
    try {
        const text = `
            INSERT INTO dogs (name, age, gender, breed, size, temperament, owner_id, neutered_spayed, bio, photo)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *
        `;
        const params = [dogName, dogAge, dogGender, dogBreed, dogSize, dogTemperament, userId, dogNeuteredSpayed, dogBio, dogPhoto];
        const result = await db.query(text, params);
        res.locals.userData = result.rows[0];
        next();
    }
    catch (err) {
        next({
            log: `userController.createNewDog: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.createNewDog. Check server logs for more details.' }
        });
    }
}

userController.getUserInfo = async (req, res, next) => {
    res.locals.userData = [];
    const { userId } = req.body;
    try {
        const text = `
            SELECT * FROM users
            WHERE _id=$1
        `;
        const params = [userId];
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
        console.log("TaLYAA", res.locals.userData[1])
        next();
    }
    catch (err) {
        next({
            log: `userController.getDogInfo: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.getDogInfo. Check server logs for more details.' }
        });
    }
}

userController.getOtherDogs = async (req, res, next) => {
    console.log("this", req.query.userId)
    const owner_id = req.query.userId;
    try {
        const text = `
            SELECT * FROM dogs
            EXCEPT
            SELECT * FROM dogs
            WHERE
            owner_id=$1
        `;
        const params = [owner_id];
        const result = await db.query(text, params);
        res.locals.dogList = result.rows;
        console.log(res.locals.dogList)
        next();
    }
    catch (err) {
        next({
            log: `userController.getOtherDogs: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.getOtherDogs. Check server logs for more details.' }
        });
    }
}

userController.saveUserInfo = async (req, res, next) => {
    const { userId, userAge, userGender, userBio, userPhoto, userLocation } = req.body;
    console.log(userId, userAge, userGender, userBio, userPhoto, userLocation)
    try {
        const text = `
      UPDATE users
      SET age=$2, gender=$3, bio=$4, photo=$5, location=$6
      WHERE _id=$1
    `;
        const params = [userId, userAge, userGender, userBio, userPhoto, userLocation];
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
            UPDATE dogs 
            SET name=$1, age=$2, gender=$3, breed=$4, size=$5, temperament=$6, owner_id=$7, neutered_spayed=$8, bio=$9, photo=$10
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

userController.matchDogs = async (req, res, next) => {
    const { dog1_id, dog2_id } = req.body;

    try {
        const text = `
            INSERT INTO matches (dog1_id, dog2_id)
            VALUES ($1, $2)
            RETURNING *
        `;
        const params = [dog1_id, dog2_id];
        const result = await db.query(text, params);
        // res.locals.matches = result.rows[0];
        next();
    }

    catch (err) {
        next({
            log: `userController.matchDogs: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.matchDogs. Check server logs for more details.' }
        });
    }
}

userController.checkExistingMatch = async (req, res, next) => {
    res.locals.matches = [];
    const { dog1_id, dog2_id } = req.body;
    try {
        const text = `
            SELECT * FROM matches
            WHERE dog1_id=$1 AND dog2_id=$2
        `;
        const params = [dog1_id, dog2_id];
        const result = await db.query(text, params);
        res.locals.matches[0] = result.rows[0];
        next();
    }
    catch (err) {
        next({
            log: `userController.checkExistingMatch: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.checkExistingMatch. Check server logs for more details.' }
        });
    }
}

module.exports = userController




// userController.verifyUser = async (req, res, next) => {
//   res.locals.userData = [];
//   const { username, password } = req.body;
//   try {
//       const text = `
//           SELECT * FROM users
//           WHERE username=$1 AND password=$2
//       `;
//       const params = [username, password];
//       const result = await db.query(text, params);
//       res.locals.userData[0] = result.rows[0];
//       next();
//   }
//   catch (err) {
//       next({
//           log: `userController.verifyUser: ERROR: ${err}`,
//           message: { err: 'Error occurred in userController.verifyUser. Check server logs for more details.' }
//       });
//   }
// }