/**
 * ************************************
 *
 * @module  chatController.js
 * @author  4PET
 * @date    first day of 2020
 * @description Controller to handle chat routes
 * 
 * ************************************
 */
const db = require('../models/userModel');
const chatController = {};

chatController.getChats = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const text = `
      SELECT c.*, d.name as sendername, d2.name as receivername 
      FROM chats c JOIN dogs d on c.sender_id=d._id JOIN dogs d2 on c.receiver_id=d2._id 
      WHERE sender_id=$1 OR receiver_id=$1 ORDER BY "timeStamp"
    `;
    const params = [userId];
    const result = await db.query(text, params);
    res.locals.chats = result.rows;
    return next();
  }
  catch (err) {
    return next({
      log: `chatController.getChats: ERROR: ${err}`,
      message: { err: 'Error occurred in chatController.getChats. Check server logs for more details.' }
    });
  }
}

chatController.postMessage = async (req, res, next) => {
  const { sender, receiver, newMessage } = req.body;
  try {
    const text = `
      INSERT INTO chats (sender_id, receiver_id, content)
      VALUES ($1, $2, $3)
    `;
    const params = [sender, receiver, newMessage];
    const result = await db.query(text, params);
    return next();
  }
  catch (err) {
    return next({
      log: `chatController.postMessage: ERROR: ${err}`,
      message: { err: 'Error occurred in chatController.postMessage. Check server logs for more details.' }
    });
  }
}

module.exports = chatController;

