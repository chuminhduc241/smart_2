const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

const { auth } = require("../middleware/auth");
const { authAdmin } = require("../middleware/authAdmin");

router.post("/register", userCtrl.register);
router.post("/activation", userCtrl.activeEmail);
router.post("/login", userCtrl.login);
router.post("/refresh_token", userCtrl.getAccessToken);
router.post("/forgot", userCtrl.forgotPassword);
router.post("/reset", auth, userCtrl.resetPassword);
router.get("/infor", auth, userCtrl.getUserInfo);
router.get("/all_infor", userCtrl.getUsersAllInfo);
router.get("/logout", userCtrl.logout);
router.get("/infor/:id", auth, userCtrl.getInforChat);
router.patch("/update", auth, userCtrl.updateUser);

router.patch("/update_role/:id", auth, authAdmin, userCtrl.updateUsersRole);
router.delete("/delete/:id", auth, authAdmin, userCtrl.deleteUser);

module.exports = router;
