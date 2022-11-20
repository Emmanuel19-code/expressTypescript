import express from "express"
const router = express.Router();

const {
    RegisterAccount,
    Login,
    VerifyAccount,
    ResetPassword
}  = require("../controllers/UserAuthentication");



router.post("/register",RegisterAccount);
router.post("/login",Login);
router.post("/",VerifyAccount);
router.post("/",ResetPassword);


export default router;
