import jwt from "jsonwebtoken";

import createResponse from "../utils/create-response.js";
import db from "../models/index.js";

const Role = db.roles;

export default class Authentication {
    static async isAuthenticated(req, res, next) {
        const token = req.headers["authorization"]?.split(" ")[1];
        if (!token)
            return res
                .status(401)
                .json(createResponse(false, "token not provided"));

        try {
            // if token id correct
            const data = await jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET
            );
            req.user_id = data.id;
            const role = await Role.findById(data.role);
            req.user_role = role.name; // name of roles
            next();
        } catch (err) {
            // if token id not correct
            return res
                .status(400)
                .json(createResponse(false, "token is not correct!"));
        }
    }
}
