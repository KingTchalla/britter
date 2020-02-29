const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: String,
    cc: String,
    balance: String,
    clientNumber: String,
    fixedIncome: Number,
    fixedSpend: Number,
    SavingObj: Number,
    level: Number,
    spendGoals: [Schema.ObjectId],
    saveGoals: [
      {
        fund: Schema.ObjectId,
        savings: { qty: Number, date: Date },
        goal: Number
      }
    ],
    dailyBudget: {
      monday: Number,
      tuesday: Number,
      wednesday: Number,
      thursday: Number,
      friday: Number,
      saturday: Number,
      sunday: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "cc" });

module.exports = model("User", userSchema);
