// logger.js - A simple logging middleware for logging request details

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const time = new Date().toISOString();
    
    console.log(`[${time}] ${method} request made to: ${url}`);
    
    // Pass control to the next middleware/route handler
    next();
  };
  
  module.exports = logger;
  