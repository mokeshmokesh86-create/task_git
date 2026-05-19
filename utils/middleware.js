const { getToken } = require('../utils/auth');

exports.authenticateToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token Missing'
    });
  }

  const token = authHeader.split(' ')[1];

  try {

    const verify = getToken(token);

    req.user = verify;

    next();

  } catch (error) {

    return res.status(403).json({
      message: 'Invalid Token'
    });

  }

};