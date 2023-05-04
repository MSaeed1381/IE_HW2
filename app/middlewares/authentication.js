import jwt from 'jsonwebtoken'

import createResponse from "../utils/create-response.js";

export default async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token)
        return res.status(401).json(createResponse(false, 'token not provided'))

    try {
        const data = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user_id = data.id;
        req.user_role = data.role; // role id
        next();
    } catch (err) {
        return res.status(403).json(createResponse(false, 'token is not correct!'))
    }
}