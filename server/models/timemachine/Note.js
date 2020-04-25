const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3
  },
  text:{
    type: String,
    required:true
  },
  date:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model("Note", noteSchema);