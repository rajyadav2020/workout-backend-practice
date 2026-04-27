const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
  exerciseName:{
    type:String,
    enum:["Pushups","Bench Press"],
    required:true

  },

  muscleGroup:{
    type:String,
    enum:["Chest","Back","Legs"],
    required:true
  },

  sets:{
    type:Number,
    required:true
  },

  reps:{
    type:Number,
    required:true
  },

  weight:{
    type:Number,
  },

  date:{
    type:Date,
    default:Date.now
  },

},{timestamps:true})

module.exports  = mongoose.model("Workout",workoutSchema)