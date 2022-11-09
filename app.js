var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const fileUpload = require("express-fileupload");


const cors = require("cors");
require("dotenv").config();

var indexRouter = require("./server/routes/index");

var app = express();

app.use(logger("dev"));
/* A middleware that parses the request body and populates req.body with an object keyed by the field
name. */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* A middleware that parses the cookie header and populates req.cookies with an object keyed by the
cookie names. */
app.use(cookieParser());
/* A middleware that allows the server to accept file uploads. */
app.use(fileUpload());
/* This is a middleware that allows the server to accept request from the client. */
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
  })
);

/* Routing the request to the respective router. */
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
