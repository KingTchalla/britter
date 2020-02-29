const { Schema, model } = require("mongoose");

const spendGoal = new Schema(
  {
    object: String,
    goal: Number,
    currentSaving: { type: Number, default: 0 },
    status: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("spendGoal", spendGoal);