const mongoose = require("mongoose");

const Recipeschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ingredients: [
      {
        type: String,
        required: true,
      },
    ],

    instructions: {
      type: String,
      required: true,
    },

    cookingTime: {
      type: String,
      required: true,
    },

    images: [
      {
        img: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Recipe", Recipeschema);
