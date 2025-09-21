// // const Recipemodel = require("../models/Recipe");
// // const cloudinary = require("../Utils/Cloudinary");
// // ///fecth all data
// // const GetAllRecipe = async (req, res) => {
// //   try {
// //     const result = await Recipemodel.find().sort({ createdart: -1 }).populate();
// //     res.status(200).json(result);
// //   } catch (error) {
// //     res.status(303).json({
// //       message: " failed to fecth data",
// //     });
// //   }
// // };
// // //fecth single data
// // const GetSingleRecipe = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const result = await Recipemodel.findBy(id).populate("title");

// //     if (!result) {
// //       return res.status(406).json({
// //         message: `task${id}not found`,
// //       });
// //     } else {
// //       res.status(201).json(result);
// //     }
// //   } catch (error) {
// //     res.status(303).json({
// //       message: "fecth failed",
// //     });
// //   }
// // };
// // //update data
// // const UpdateRecipe = async (req, res) => {
// //   const { id } = req.params;
// //   const { title, description, ingredients, instructions, cookingTime } =
// //     req.body;
// //   try {
// //     const result = await Recipemodel.findById(id);
// //     if (!result) {
// //       return res.status(406).json({
// //         message: `task${id}not found`,
// //       });
// //     } else {
// //       result.title = title || result.title;
// //       result.instructions = instructions || result.instructions;
// //       result.description = description || result.description;
// //       result.cookingTime = cookingTime || result.cookingTime;

// //       result.ingredients = ingredients || result.ingredients;

// //       await result.save();
// //       res.status(201).json(result);
// //     }
// //   } catch (error) {
// //     res.status(303).json({
// //       message: " failed to update",
// //     });
// //   }
// // };
// // const DeleteRecipe = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const result = await Recipemodel.findByIdAndDelete(id);
// //     if (!result) {
// //       return res.status(406).json({
// //         message: `meal${id}not found`,
// //       });
// //     } else {
// //       res.status(201).json({ message: `meal ${id} deleted successfully` });
// //     }
// //   } catch (error) {
// //     res.status(303).json({
// //       message: "internal server error",
// //     });
// //   }
// // };
// // ///post data
// // const createRecipe = async (req, res) => {
// //   const { title, ingredients,images, instructions, cookingTime, description } =
// //     req.body;
// //   try {
// //     ///check is task exists in data base
// //     const projectExist = await Recipemodel.findOne({ title });
// //     if (projectExist) {
// //       res.status(405).json({
// //         message: "alredy created",
// //       });
      
// //     }
    
// //     ///to create new
// //     // const createNewrecipe = await Recipemodel.create({
// //     //   title,
// //     //   description,
// //     //   ingredients,
// //     //   instructions,
// //     //   cookingTime,
// //     //   images,
// //     // });

// //     //to cloud first
// //     const uploadedImages = await Promise.all(
// //       images.map(async (image) => {
// //         const result = await cloudinary.uploader.upload(image, {
// //           folder: "products", // Optional: store images in a specific folder in Cloudinary

// //           resource_type: "image",
// //         });

// //         return {
// //           img: result.secure_url,
// //         };
// //       })
// //     );
// //      const createNewrecipe = await Recipemodel.create({
// //       title,
// //       description,
// //       ingredients,
// //       instructions,
// //       cookingTime,
// //       images: uploadedImages,
// //     });
// //     ///saving ecerything is the reg.boby to the data base
// //     const taskResult = await createNewrecipe.save();

// //     ///where im returning the data if sucessfull
// //     res.status(200).json(taskResult);
// //     //or

// //     res.status(200).json({
// //       _id: taskResult._id,
// //       tittle: taskResult.title,
// //       ingredients: taskResult.ingredients,
// //       description: taskResult.description,
// //       cookingtime: taskResult.cookingTime.RecipeModel,

// //       intructions: taskResult.instructions,
// //     });
// //   } catch (error) {
// //     res.status(404).json({ message: "failed to fecth data" });
// //   }
// // };

// // module.exports = {
// //   GetAllRecipe,

// //   GetSingleRecipe,

// //   UpdateRecipe,

// //   DeleteRecipe,
// //   createRecipe,
// // };
// const Recipemodel = require("../models/Recipe");
// const cloudinary = require("../Utils/Cloudinary");

// // Fetch all data
// const GetAllRecipe = async (req, res) => {
//   try {
//     const result = await Recipemodel.find().sort({ createdAt: -1 });
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "failed to fetch data",
//       error: error.message,
//     });
//   }
// };

// // Fetch single data
// const GetSingleRecipe = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Recipemodel.findById(id);
//     if (!result) {
//       return res.status(404).json({
//         message: `recipe ${id} not found`,
//       });
//     }
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "fetch failed",
//       error: error.message,
//     });
//   }
// };

// // Update data
// const UpdateRecipe = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, ingredients, instructions, cookingTime } = req.body;

//   try {
//     const result = await Recipemodel.findById(id);
//     if (!result) {
//       return res.status(404).json({
//         message: `recipe ${id} not found`,
//       });
//     }

//     result.title = title || result.title;
//     result.instructions = instructions || result.instructions;
//     result.description = description || result.description;
//     result.cookingTime = cookingTime || result.cookingTime;
//     result.ingredients = ingredients || result.ingredients;

//     await result.save();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "failed to update",
//       error: error.message,
//     });
//   }
// };

// // Delete data
// const DeleteRecipe = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Recipemodel.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({
//         message: `recipe ${id} not found`,
//       });
//     }
//     res.status(200).json({ message: `recipe ${id} deleted successfully` });
//   } catch (error) {
//     res.status(500).json({
//       message: "internal server error",
//       error: error.message,
//     });
//   }
// };

// // Create data
// const createRecipe = async (req, res) => {
//   const { title, ingredients, images, instructions, cookingTime, description } = req.body;

//   try {
//     const projectExist = await Recipemodel.findOne({ title });
//     if (projectExist) {
//       return res.status(400).json({
//         message: "already created",
//       });
//     }

//     // Ensure images exist
//     if (!images || !Array.isArray(images)) {
//       return res.status(400).json({ message: "Images are required and must be an array" });
//     }

//     // Upload to cloudinary
//     const uploadedImages = await Promise.all(
//       images.map(async (image) => {
//         const result = await cloudinary.uploader.upload(image, {
//           folder: "products",
//           resource_type: "image",
//         });
//         return { img: result.secure_url };
//       })
//     );

//     // Save new recipe
//     const createNewrecipe = await Recipemodel.create({
//       title,
//       description,
//       ingredients,
//       instructions,
//       cookingTime,
//       images: uploadedImages,
//     });

//     res.status(201).json(createNewrecipe);
//   } catch (error) {
//     res.status(500).json({
//       message: "failed to create recipe",
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//   GetAllRecipe,
//   GetSingleRecipe,
//   UpdateRecipe,
//   DeleteRecipe,
//   createRecipe,
// };

const streamifier = require("streamifier");
const Recipemodel = require("../models/Recipe");
const cloudinary = require("../Utils/Cloudinary");

// helper: upload single multer memory file (file.buffer) to cloudinary
const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "recipes" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

// ===================== CREATE RECIPE =====================
const createRecipe = async (req, res) => {
  const { title, ingredients, instructions, cookingTime, description } = req.body;

  try {
    console.log("createRecipe: files received:", req.files?.length || 0);

    // duplicate check
    const projectExist = await Recipemodel.findOne({ title });
    if (projectExist) return res.status(400).json({ message: "already created" });

    // ingredients -> array
    let ingredientsArray = [];
    if (Array.isArray(ingredients)) ingredientsArray = ingredients;
    else if (typeof ingredients === "string")
      ingredientsArray = ingredients.split(",").map((i) => i.trim());

    // upload files to Cloudinary (if any)
    let uploadedImages = [];
    if (req.files && req.files.length > 0) {
      uploadedImages = await Promise.all(
        req.files.map(async (file) => {
          const result = await uploadToCloudinary(file);
          return { img: result.secure_url };
        })
      );
    }

    // create
    const createNewrecipe = await Recipemodel.create({
      title,
      description,
      ingredients: ingredientsArray,
      instructions,
      cookingTime,
      images: uploadedImages,
    });

    res.status(201).json(createNewrecipe);
  } catch (error) {
    console.error("❌ Recipe creation failed:", error);
    res.status(500).json({ message: "failed to create recipe", error: error.message });
  }
};

// ===================== UPDATE RECIPE =====================
const UpdateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, description, ingredients, instructions, cookingTime } = req.body;

  try {
    console.log("updateRecipe: files received:", req.files?.length || 0);

    const recipe = await Recipemodel.findById(id);
    if (!recipe) return res.status(404).json({ message: `recipe ${id} not found` });

    // ingredients handling
    if (ingredients) {
      if (Array.isArray(ingredients)) recipe.ingredients = ingredients;
      else if (typeof ingredients === "string")
        recipe.ingredients = ingredients.split(",").map((i) => i.trim());
    }

    // if new files provided, upload and replace or append
    if (req.files && req.files.length > 0) {
      const uploadedImages = await Promise.all(
        req.files.map(async (file) => {
          const result = await uploadToCloudinary(file);
          return { img: result.secure_url };
        })
      );

      // CHOICE: Replace existing images with new ones (uncomment to replace)
      recipe.images = uploadedImages;

      // Or to append new images to existing ones, use:
      // recipe.images = [...(recipe.images || []), ...uploadedImages];
    }

    // other fields
    recipe.title = title || recipe.title;
    recipe.description = description || recipe.description;
    recipe.instructions = instructions || recipe.instructions;
    recipe.cookingTime = cookingTime || recipe.cookingTime;

    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    console.error("❌ Recipe update failed:", error);
    res.status(500).json({ message: "failed to update", error: error.message });
  }
};


// ===================== DELETE RECIPE =====================
const DeleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipemodel.findByIdAndDelete(id);
    if (!recipe) {
      return res.status(404).json({ message: `Recipe ${id} not found` });
    }
    res.status(200).json({ message: `Recipe ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete recipe",
      error: error.message,
    });
  }
};



// ===================== GET ALL RECIPES =====================
const GetAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipemodel.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recipes",
      error: error.message,
    });
  }
};



// ===================== GET SINGLE RECIPE =====================
const GetSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipemodel.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: `Recipe ${id} not found` });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recipe",
      error: error.message,
    });
  }
};



// ===================== EXPORT =====================
module.exports = {
  createRecipe,
  UpdateRecipe,
  DeleteRecipe,
  GetAllRecipe,
  GetSingleRecipe,
};
