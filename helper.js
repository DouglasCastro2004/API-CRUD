const client = require("./database/db");

const createNote = (req, res) => {
  try {
    const { note } = req.body;

    if (!note) {
      throw console.error("Send note in request body!");
    }
    client.query(
      "INSERT INTO notes (note) VALUES ($1)",
      [note],
      (err, data) => {
        res.status(201).json({
          error: null,
          message: "Created new note!",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Failed to create new note!",
    });
  }
};

const getNotes = (req, res) => {
  try {
    client.query("SELECT * FROM notes", (err, data) => {
      if (err) throw err;
      res.status(200).json({
        err: null,
        notes: data.rows,
      });
    });
  } catch (error) {
    res.status(500).json({
      err: err.message,
      note: null,
    });
  }
};

const getNoteByid = (req, res) => {
  try {
    const { id } = req.params;
    client.query("SELECT * FROM notes WHERE id= $1", [id], (err, data) => {
      if (err) throw err;

      res.status(200).json({
        err: null,
        note: data.rows[0],
      });
    });
  } catch (error) {
    res.status(500).json({
      err: err.message,
      note: null,
    });
  }
};

const updateById = (req, res) => {
  try {
    const { id } = req.params;
    const { note } = req.body;
    client.query(
      "UPDATE notes SET note = $1 WHERE id = $2",
      [note, id],
      (err, data) => {
        if (err) throw err;

        res.status(201).json({
          err: null,
          message: "Update note!",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      err: error.message,
      message: "Failed to update note!",
    });
  }
};

const deleteNote = (req, res) => {
  try {
    const { id } = req.params;
    client.query("DELETE FROM notes id = $1", [id], (err, data) => {
      if (err) throw err;

      res.status(200).json({
        error: null,
        message: "Note deleted",
      });
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Failed to delete note",
    });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteByid,
  updateById,
  deleteNote,
};
