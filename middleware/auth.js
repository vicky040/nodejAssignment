const { verify } = require('../utils/jwt');

const auth = (req, res, next) => {
  try {
    
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.substring(7); 

   
    const result = verify(token);

    if (!result.valid) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    
    req.user = result.decoded;
    
    
    next();
  } catch (error) {
    next(error);
  }
};


module.exports = auth ; 