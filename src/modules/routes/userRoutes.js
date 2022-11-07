const Router = require("express");
const userRoutes = new Router();
const { check } = require("express-validator");
const { createNewUser, loginUser } = require("../controllers/usersControllers");

userRoutes.post(
  "/createNewUser",
  [
    check("email", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 4 символом").isLength({
      min: 4,
    }),
  ],
  createNewUser
);
userRoutes.post("/loginUser", loginUser);

module.exports = userRoutes;
