const db = require("../database");

class Exercises {
  static retrieveAll(callback) {
    db.query("SELECT title, description, category from exercises", function (
      err,
      res
    ) {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  static insert(exercise, callback) {
    db.query(
      "INSERT INTO exercises (title, description, category), VALUES ($1, $2, $3)",
      [exercise.title, exercise.description, exercise.category],
      function (err, res) {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Exercises;
