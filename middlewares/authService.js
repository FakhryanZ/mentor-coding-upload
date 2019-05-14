const jwt = require('jsonwebtoken')

function verifyToken(token, res) {
    return new Promise(async (resolve, reject) => {
        try {
            const payload = await jwt.verify(token, `${process.env.JWT_SECRET}`)   
            resolve(payload.data)
        } catch (error) {
            res.sendStatus(403)
        }
    })
}

async function authenticateUser(req, res, next){
    const bearerHeader = req.headers["authorization"]
    if (typeof bearerHeader !== "undefined") {
        const token = bearerHeader.split(" ")[1]
        req.user = await verifyToken(token, res)
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = authenticateUser