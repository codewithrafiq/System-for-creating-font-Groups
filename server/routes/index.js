var express = require("express");
const router = express.Router();
const Font = require("../schemas/fonts");
const Group = require("../schemas/group");

router.get("/", async (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.post("/add-font", async (req, res) => {
  let data = req.body;
  await Font.create(data)
    .then((result) => {
      res.status(200);
      res.json({
        message: "Font added successfully",
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        message: String(err.message),
      });
    });
});

router.get("/get-fonts", async (req, res) => {
  await Font.find({})
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json({
        message: String(err.message),
      });
    });
});
router.get("/get-fonts-id-and-name", async (req, res) => {
  await Font.find({})
    .select("name")
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json({
        message: String(err.message),
      });
    });
});

router.post("/delete-fonts/:fontId", async (req, res) => {
  try {
    // // // console.log("fontId-------------------->",req.params.fontId);
    Font.findOne({ _id: req.params.fontId }).remove().exec();
    res.json({ message: "deleted" });
  } catch (error) {
    res.json({
      error: JSON.stringify(error),
    });
  }
});
router.post("/delete-fonts-group/:groupId", async (req, res) => {
  try {
    // // // console.log("fontId-------------------->",req.params.fontId);
    Group.findOne({ _id: req.params.groupId }).remove().exec();
    res.json({ message: "deleted" });
  } catch (error) {
    res.json({
      error: JSON.stringify(error),
    });
  }
});
router.get("/get-fonts/:fontId", async (req, res) => {
  try {
    let font = await Font.findOne({ _id: req.params.fontId });
    res.json(font);
  } catch (error) {
    res.json({
      error: JSON.stringify(error),
    });
  }
});

router.post("/create-font-group", async (req, res) => {
  // let data = JSON.parse(req.body);
  console.log("data--->", req.body);
  try {
    Group.create(req.body)
      .then((res) => {
        console.log("================create-font-group====================");
        console.log(res);
        console.log("====================================");
      })
      .catch((error) => {
        console.log(
          "============create-font-group==========error=============="
        );
        console.log(error);
        console.log("====================================");
      });
  } catch (error) {}
  res.json({ message: "Hello world" });
});

router.get("/get-font-groups", async (req, res) => {
  let groups = await Group.find({});
  res.json(groups);
});









module.exports = router;
