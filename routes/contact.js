const express = require("express");
const contactRouter = express.Router();
const contactS = require("../modeles/contact");

// add new contact
contactRouter.post("/add", async (req, res) => {
  try {
    const jdid = new contactS(req.body);
    const result = await jdid.save();
    res.send({ contactjdid: result, msg: "contact is saved" });
  } catch (error) {
    console.log(error);
  }
});

// get all contacts
contactRouter.get("/all", async (req, res) => {
  try {
    const result = await contactS.find();
    res.send({ list: result, msg: "list of contacts" });
  } catch (error) {
    console.log(error);
  }
});

// get by id
contactRouter.get("/:id", async (req, res) => {
  try {
    const result = await contactS.findById({ _id: req.params.id });
    res.send({ contact: result, msg: "voici contact" });
  } catch (error) {
    console.log(error);
  }
});

// delete of contact
contactRouter.delete("/:id", async (req, res) => {
  try {
    const result = await contactS.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "contact deleted" });
  } catch (error) {
    console.log(error);
  }
});

// update of contact
contactRouter.put("/:id", async (req, res) => {
  try {
    const result = await contactS.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "contact updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = contactRouter;
