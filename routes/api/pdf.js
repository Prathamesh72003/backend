const express = require("express");
const router = express.Router();

// Load Book model
const Pdf = require("../../models/pdf");
const Subject = require("../../models/subject");

// @route GET api/books/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("book route testing!"));

// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  Pdf.find({
    status: "",
  })
    .then((pdf) => res.json(pdf))
    .catch((err) => res.status(404).json({ nobooksfound: "No Pdfs's found" }));
});

// // @route GET api/books/:id
// // @description Get single book by id
// // @access Public
// router.get("/:id", (req, res) => {
//   Book.findById(req.params.id)
//     .then((book) => res.json(book))
//     .catch((err) => res.status(404).json({ nobookfound: "No Book found" }));
// });

// // @route GET api/books
// // @description add/save book
// // @access Public
// router.post("/", (req, res) => {
//   Book.create(req.body)
//     .then((book) => res.json({ msg: "Book added successfully" }))
//     .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
// });

// // @route GET api/books/:id
// // @description Update book
// // @access Public
router.put("/approve/:id", (req, res) => {
  Pdf.findByIdAndUpdate(req.params.id, {
    status: "true",
    status_msg: "Approved",
    status_color: "#03c04a",
  })
    .then((pdf) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.put("/reject/:id", (req, res) => {
  // console.log(req.params.id);
  Pdf.findByIdAndUpdate(req.params.id, req.body)
    .then((pdf) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.post("/add_subject", (req, res) => {
  Subject.insertMany(req.body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

// // @route GET api/books/:id
// // @description Delete book by id
// // @access Public
// router.delete("/:id", (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
//     .catch((err) => res.status(404).json({ error: "No such a book" }));
// });

module.exports = router;
