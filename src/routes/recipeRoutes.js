const express = require("express");
const {
  GetAllRecipe,
  GetSingleRecipe,
  createRecipe,
  UpdateRecipe,
  DeleteRecipe,
} = require("../controllers/Recipecontroller");
const router = express.Router();
router.get("/", GetAllRecipe);
router.get("/api/:id", GetSingleRecipe);

router.post("/", createRecipe);
router.put("/:id", UpdateRecipe);
router.delete("/:id", DeleteRecipe);
module.exports = router;
