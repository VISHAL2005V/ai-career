// controllers/careerController.js
import { getCareerSuggestions as mockSuggestions } from "../services/careerService.js";

export const getCareerSuggestions = (req, res) => {
  const { skills } = req.body;

  if (!skills || !Array.isArray(skills)) {
    return res.status(400).json({ message: "Skills must be an array" });
  }

  const suggestions = mockSuggestions(skills);
  res.json({ careers: suggestions });
};
