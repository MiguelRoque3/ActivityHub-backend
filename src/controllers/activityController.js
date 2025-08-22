import Activity from "../models/Activity.js";

// Crear actividad
export const createActivity = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const activity = await Activity.create({
      userId: req.user._id,
      title,
      description,
      status,
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error al crear actividad" });
  }
};

// Listar actividades del usuario
export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user._id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener actividades" });
  }
};

// Obtener una actividad
export const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id, userId: req.user._id });
    if (!activity) return res.status(404).json({ message: "Actividad no encontrada" });
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la actividad" });
  }
};

// Actualizar actividad
export const updateActivity = async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id, userId: req.user._id });
    if (!activity) return res.status(404).json({ message: "Actividad no encontrada" });

    activity.title = req.body.title || activity.title;
    activity.description = req.body.description || activity.description;
    activity.status = req.body.status || activity.status;

    const updatedActivity = await activity.save();
    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la actividad" });
  }
};

// Eliminar actividad
export const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!activity) return res.status(404).json({ message: "Actividad no encontrada" });
    res.json({ message: "Actividad eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la actividad" });
  }
};
