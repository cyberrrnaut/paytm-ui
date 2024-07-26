//Header - 
//Authorization: Bearer <actual token>


import path from 'path';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const jwtKey = process.env.JWT_KEY;

const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = header.split(' ')[1]; // 0->Bearer

    try {
        const decoded = await jwt.verify(token, jwtKey);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
}

export { authMiddleware };