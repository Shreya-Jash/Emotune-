const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");

//register route

router.post("/register", validInfo, async (req, res) => {
  try {
    // 1. destructe req.body
    const { name, password } = req.body;

    //2.check if user exist(is exists then throw error)

    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      name,
    ]);

    // res.json(user.rows);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exist");
    }

    //3. Brcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const brcryptPassword = await bcrypt.hash(password, salt);

    //4. enter the new user insdie our database

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_password) VALUES ($1,$2) RETURNING *",
      [name, brcryptPassword]
    );

    res.json(newUser.rows[0]);

    // 5. generating jwt token

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//login route

router.post("/login", validInfo, async (req, res) => {
  try {
    //1. destructure the req.body

    const { name, password } = req.body;

    //2. check id user doesn't exist  (if not then we throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
      name,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or username is incorrect");
    }

    //3. check if incoming password is the same as database password

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or username is incorrect");
    }

    console.log(validPassword);

    //4. give them the jwt token

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify", authorization, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
