import {Router} from "express";
import bcrypt from "bcrypt";
import db from "../database/connection.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/api/auth/login", async (req, res) => {

    const [[user]] = await db.execute("SELECT * FROM users WHERE mail = ? LIMIT 1", [
        req.body.emailAddress,
    ]);

    if (!user) {
        res.status(401).send();
    }

    if (bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign({
            user: {id: user.id, mail: user.emailAddress}
        }, process.env.ACCES_TOKEN_SECRET);
        return res.json(accessToken);
    } else res.status(401).send({
        "message": "Access denied",
    });
});

export default router;
