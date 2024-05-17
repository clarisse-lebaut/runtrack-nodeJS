/* --- JOB 5 --- */

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://clarisselebaut:3W88gROblNsnOm88@runtracknodejscluster.s4u9s1x.mongodb.net/LaPlateforme"
);

const studentSchema = new mongoose.Schema({
  students: {
    type: String,
    required: true,
  },
  year: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Year",
  },
});

const yearSchema = new mongoose.Schema({
  years: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "students",
    },
  ],
});

const Student = mongoose.model("students", studentSchema, "students");
const Year = mongoose.model("years", yearSchema, "years");

generate();
async function generate() {
  const bachelor1 = await new Year({ years: "Bachelor 1" }).save();
  const bachelor2 = await new Year({ years: "Bachelor 2" }).save();
  const bachelor3 = await new Year({ years: "Bachelor 3" }).save();

  await new Student({ students: "Bob LeBricoleur", year: bachelor1 }).save();
  await new Student({ students: "John Doe", year: bachelor2 }).save();
  await new Student({ students: "Marine Dupont", year: bachelor3 }).save();
}

console.log("connexion établit ! Tu peux faire CTRL + C");
