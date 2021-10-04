const mongoose = require("mongoose");

const SubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department_id: {
      type: Number,
      required: true,
    },
    level: {
      type: Boolean,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, collection: "subject" }
);

module.exports = Subject = mongoose.model("subject", SubSchema);
