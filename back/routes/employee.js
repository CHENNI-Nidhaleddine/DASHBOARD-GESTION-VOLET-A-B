const Employee = require("../models/Employee");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { ALLOWED_EXTENSIONS } = require("@discordjs/rest");


//REGISTER

router.post("/register", async (req, res) => {
    
  try {
    
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      admin: req.body.admin,
      wilaya: req.body.wilaya,
      password:req.body.password,
    });

    //save user and respond
    const employee = await newEmployee.save();
    res.status(200).json(employee._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //find user
    const employee = await Employee.findOne({ email: req.body.email });
    !employee && res.status(400).json("Wrong username or password");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      employee.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    //send response
    res.status(200).json({ _id: employee._id, employee: employee });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getAll", async (req, res) => {
  try {
    //find circuits
    const Employees = await Employee.find();

    //send response
    res.status(200).json({Employees: Employees });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/delete/:id",async (req,res)=>{
  try {
  await Employee.findByIdAndDelete(req.params.id)
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;


// {
     
//   "place":"Wahran",
//   "type":"Historique",
//   "duration":"10 jours",
//  "visitors": 20, 
//  "markers": [
//     {
//       "lat":30.553208,
//       "lng":76.177533
//     },
//     {
//       "lat":36.189246,
//       "lng":55.402176
//    },
//         {
//       "lat":30.553208,
//       "lng":76.177533
//     },
//      {
//       "lat":30.553208,
//       "lng":76.177533
//     }
//   ]
// }
