const db = require('../models/userModel');

const userController = {}

userController.addDog = async (req, res, next) => {
    const { name, age, gender, breed, size, temperament, owner_id, neutered_spayed, bio, photo } = req.body;
    try {
        const text = `
      INSERT INTO people (name, age, gender, breed, size, temperament, owner_id, neutered_spayed, bio, photo)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
        const params = [name, age, gender, breed, size, temperament, owner_id, neutered_spayed, bio, photo];
        const result = await db.query(text, params);
        res.locals.character = result.rows[0];
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