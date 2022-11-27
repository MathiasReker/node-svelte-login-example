import db from "./connection.js";
import bcrypt from "bcrypt";

await db.execute("DROP TABLE IF EXISTS users");
await db.execute("DROP TABLE IF EXISTS roles");

await db.execute(
    `CREATE TABLE IF NOT EXISTS roles
     (
         id        INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         role_name VARCHAR(50)
     );`
);

await db.execute(
    `CREATE TABLE IF NOT EXISTS users
     (
         id       INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         name     VARCHAR(50),
         mail     VARCHAR(50),
         password VARCHAR(255),
         role_id  INTEGER,
         CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES roles (id)
     )
    `
);

await db.execute("INSERT INTO roles (role_name) VALUES('admin')");
await db.execute("INSERT INTO roles (role_name) VALUES('user')");

await db.execute("INSERT INTO users(name, mail, password, role_id) VALUES(?, ?, ?, ?)", [
    "admin",
    "admin@demo.com",
    await bcrypt.hash("admin", 12),
    1,
]);

await db.execute("INSERT INTO users(name, mail, password, role_id) VALUES(?, ?, ?, ?)", [
    "user",
    "user@demo.com",
    await bcrypt.hash("user", 12),
    2,
]);

await db.end();
