const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    ip: String,
    city: String,
    country_name: String,
    continent_name: String,
    flag: String,
    latitude: Number,
    longitude: Number,
    current_time: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const LogModel = mongoose.model("Logs", logSchema);

module.exports = LogModel;
