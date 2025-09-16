// const express = require("express");
// const {
//   GetAllRecipe,
//   GetSingleRecipe,
//   createRecipe,
//   UpdateRecipe,
//   DeleteRecipe,
// } = require("../controllers/Recipecontroller");
// const router = express.Router();
// router.get("/", GetAllRecipe);
// router.get("/:id", GetSingleRecipe);

// router.post("/", createRecipe);
// router.put("/:id", UpdateRecipe);
// router.delete("/:id", DeleteRecipe);
// module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage(); // store files in memory
const upload = multer({ storage });

const {
  createRecipe,
  UpdateRecipe,
  DeleteRecipe,
  GetAllRecipe,
  GetSingleRecipe,
} = require("../controllers/Recipecontroller");

router.get("/", GetAllRecipe);
router.get("/:id", GetSingleRecipe);
router.post("/", upload.array("images", 5), createRecipe); // ✅ multer
router.put("/:id", upload.array("images", 5), UpdateRecipe); // ✅ multer
router.delete("/:id", DeleteRecipe);

module.exports = router;
