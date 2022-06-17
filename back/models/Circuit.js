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





const mongoose = require("mongoose");

const CircuitSchema = new mongoose.Schema(
  {
    visitors: {
      type: Number,
      default:0,
    },
    title:{
      type: String,
    },
    place: {
        type: String,
      },
    type: [{
      type: String,
    }],
    duration: {
      type: String,
      default:0
    },
    description:{
      type: String,
      default:""
    },
    markers: [{
                lat: {type: Number},
                lng:{type: Number},
        }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Circuit", CircuitSchema);