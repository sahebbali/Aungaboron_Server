const jwt = require("jsonwebtoken");
class Authorization {
    authorized(req,res,next) {
        const JWT_SECRET='sahebalie12@';
        const headerToken = req.headers.authorization;
        if(headerToken){
            const token = headerToken.split('Bearer ')[1];
            console.log(token);
            const verified = jwt.verify(token,JWT_SECRET);

            if(verified){
                next();
            } else{
                return res.status(401).json({errors: [{msg: 'Please add a valid token'}]});
            }
        } else{
            return res.status(401).json({errors: [{msg: 'Please add a  token'}]});

        }
    }
}

module.exports = new Authorization();