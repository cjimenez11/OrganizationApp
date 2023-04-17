const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function authenticator(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            res.send({
                message: "Invalid token, please login",
                status: 2
            });
        }
        if(decoded){
            req.body.user = decoded.userId;
            next();
        }
        else{
            res.send({
                message: "Invalid token, please login",
                status: 2
            });
        }
    });
}

module.exports = {
    authenticator
};