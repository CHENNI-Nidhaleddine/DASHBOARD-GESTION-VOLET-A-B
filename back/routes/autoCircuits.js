const AutoCircuit = require("../models/AutoCircuit");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER

router.post("/create", async (req, res) => {
    
  try {
    
    // const circuits: {
//     id: number;
//     place: string;
//     type: string;
//     duration: string;
//     visitors: number;
//     markers: {
//         lat: number;
//         lng: number;
//     }[];
// }[]
    
    //create new Circuit
    const newAutoCircuit = new AutoCircuit({
      title: req.body.title,
      place: req.body.place,
      type: req.body.type,
      duration: req.body.duration,
      visitors: req.body.visitors,
      markers: req.body.markers,
      description :req.body.description
    });
    console.log(newAutoCircuit)
    //save user and respond
    const autoCircuit = await newAutoCircuit.save();
    res.status(200).json(autoCircuit._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.get("/getAll", async (req, res) => {
  try {
    //find circuits
    const AutoCircuits = await AutoCircuit.find();

    //send response
    res.status(200).json({AutoCircuits: AutoCircuits });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:id",async (req,res)=>{
  try {
  await AutoCircuit.findByIdAndDelete(req.params.id)
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;