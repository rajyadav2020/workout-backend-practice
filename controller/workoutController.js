const Workout = require('../model/workout')

const createWorkout = async (req,res)=>{
  try{

    //things i should follow to write the controller of any backend

    //1. to take out the data from req.body
    const {exerciseName,muscleGroup,sets,reps,weight,date} = req.body;


    //2.validate the data (if any important field is missing)

    if(!exerciseName || !muscleGroup || !sets || !reps)
    {
      return res.status(400).json({
        error : "all fields are required"
      })
    }

    //3.saving the data in database

    const newWorkout = await Workout.create({
      exerciseName,
      muscleGroup,
      sets,
      reps,
      weight
    });



    //4.sending the reponse 

    res.status(201).json(newWorkout);
 


  }catch(error)
  {
    res.status(400).json({error:error.message})
  }
}

const getAllWorkouts = async (req,res)=>{
  try{
    const workouts = await Workout.find({}).sort({createdAt:-1});

    res.status(200).json(workouts)
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {
  createWorkout,
  getAllWorkouts
}