const jwt = require('jsonwebtoken');

const validateJWT = (req, res=response, next) => {

    // x-token headers
    const token = req.header('x-token');
    console.log(token);
    // validar token
    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token does not exist',
        });
    };

    try {
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED, 
        );
        req.uid = payload.uid;
        req.name = payload.name;
    } catch (error) {
        
        return res.status(401).json({
            ok: false,
            msg: 'Token not valid',
        });   
    };

    // si todo se ejecuta bien
    next();
};

module.exports = {
    validateJWT,
}