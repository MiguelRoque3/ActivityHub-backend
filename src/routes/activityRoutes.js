import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

const router = express.Router();

// Todas las rutas de actividades requieren autenticación
router.post("/", protect, createActivity);
router.get("/", protect, getActivities);
router.get("/:id", protect, getActivityById);
router.put("/:id", protect, updateActivity);
router.delete("/:id", protect, deleteActivity);

export default router;
