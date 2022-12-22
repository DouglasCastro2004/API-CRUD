const express = require("express");
const app = express();

const db = require("./helper");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.listen(3000, () => console.log("Listening on port 3000"));

app.get("/notes", db.getNotes);
app.get("/note/:id", db.getNoteByid);
app.put("/note/:id", db.updateById);
app.post("/note", db.createNote);
app.delete("/note/:id", db.deleteNote);