const jwt = require('jsonwebtoken');
require('dotenv').config();

// CREATE TOKEN
exports.setToken = (userid) => {

  try {

    const token = jwt.sign(
      { id: userid },
      process.env.JWT_TOKEN,
      { expiresIn: '1h' }
    );

    return token;

  } catch (error) {

    console.log(error);

  }

};

// VERIFY TOKEN
exports.getToken = (token) => {

  try {

    const verify = jwt.verify(
      token,
      process.env.JWT_TOKEN
    );

    return verify;

  } catch (error) {

    console.log(error);

  }

};