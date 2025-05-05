import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false, messege:"Not Authorizat Login Again"})
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)                   //decode the token
        req.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

export default authMiddleware;