const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uploader_id: {
      type: String,
      required: true,
    },
    pdf_url: {
      type: String,
      required: true,
    },

    department_id: {
      type: Number,
      required: true,
    },
    subject_id: {
      type: String,
      required: true,
    },
    viewers: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    status_color: {
      type: String,
      required: true,
    },
    status_msg: {
      type: String,
      required: true,
    },
  },
  { collection: "pdf" }
);

module.exports = Pdf = mongoose.model("pdf", PdfSchema);
