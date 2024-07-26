import express from 'express';
const app = express();
const router = express.Router();
import userRouter from "./user.route.js";
import accountRouter from "./account.route.js";

router.use("/user", userRouter);
router.use("/account", accountRouter);

export default router;