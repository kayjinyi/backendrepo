const router = require("express").Router();

const { createUser, getUser } = require("../../controllers/user_controller");

router.route("/").get(getUser).post(createUser);

module.exports = router;
