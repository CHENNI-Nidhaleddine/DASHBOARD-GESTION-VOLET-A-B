const Circuit = require("../models/Circuit");
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
    const newCircuit = new Circuit({
      place: req.body.place,
      type: req.body.type,
      duration: req.body.duration,
      visitors: req.body.visitors,
      markers: req.body.markers   
    });
    console.log(newCircuit)
    //save user and respond
    const circuit = await newCircuit.save();
    res.status(200).json(circuit._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.get("/getAll", async (req, res) => {
  try {
    //find circuits
    const Circuits = await Circuit.find();

    //send response
    res.status(200).json({Circuits: Circuits });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;