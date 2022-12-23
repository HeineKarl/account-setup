// Requiring Express Module to create the server
require("dotenv").config();
require("colors").enable();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Importing Utilities
const ListService = require("./util/knexService");
const ListObj = new ListService("lists");
// const { insertList, getLists, deleteList, updateList } = ListService;

// Middlewares to read the reqest body
// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const lists = require("./routes/lists");
const users = require("./routes/users");

app.use("/lists", lists);
app.use("/users", users);

const convert = require("./util/blobService");
app.get("/sample", (req, res) => {
  res.send({ bib: convert() });
});

// Express Module to start listening to the Server
const port = 5000;
app.listen(port, () => console.log(`Server is running at Port ${port}`));
