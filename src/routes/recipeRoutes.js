const express = require("express");
const {
  GetAllRecipe,
  GetSingleRecipe,
  createRecipe,
  UpdateRecipe,
  DeleteRecipe,
} = require("../controllers/Recipecontroller");
const router = express.Router();
router.get("/api/", GetAllRecipe);
router.get("/api/:id", GetSingleRecipe);

router.post("/api/", createRecipe);
router.put("/api/:id", UpdateRecipe);
router.delete("/apai/:id", DeleteRecipe);
module.exports = router;
