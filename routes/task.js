import express from "express";
import { deleteeTask, getMYTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask)

router.get("/my", isAuthenticated, getMYTask)

router
    .route("/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteeTask);

export default router;