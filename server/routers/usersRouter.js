import {Router} from "express";
import bcrypt from "bcrypt";
import db from "../database/connection.js";
import {sendMail} from "../utils/sendMail.js";

const router = Router();

router.get("/api/users/:id", async (req, res) => {
    const user = await db.execute("SELECT * FROM users WHERE id = ?", [req.params.id,]);

    res.status(200).send(user);
});

router.post("/api/users", async (req, res) => {
    const user = {...req.body};

    user.password = await bcrypt.hash(user.password, 12);

    await db.execute("INSERT INTO users(name, mail, password, role_id) VALUES(?, ?, ?, ?)", [user.username, user.emailAddress, user.password, 2,]);

    // TODO more validation
    sendMail(user.emailAddress, "New account", "Your account has been created")
        .then((mail) => {
            res.status(200).send({data: mail});
        })
        .catch((err) => {
            res.status(404).send({data: err});
        });

    res.send({
        "username": user.username, "emailAddress": user.emailAddress
    });
});

export default router;
