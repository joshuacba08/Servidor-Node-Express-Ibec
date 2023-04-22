const { Schema, model } = require("mongoose");

const ProductSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    category: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    discount: {
        type: Number,
        require: true,
        default: 0,
    },
    status: {
      type: Boolean,
      require: true,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Product", ProductSchema);
