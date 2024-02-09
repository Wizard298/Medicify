const express = require('express')
const app = express();

// Creating Middleware
app.use(express.json())

let medicify = {

    medicine: [
        { id: 1, name: "Paracetamol",  averageRating: 3, userVoted: 2, cost: 20 },
        { id: 2, name: "Antibiotics",  averageRating: 2, userVoted: 5, cost: 30 },
        { id: 3, name: "Strepsils",    averageRating: 2, userVoted: 3, cost: 40 },
        { id: 4, name: "Vicks",        averageRating: 5, userVoted: 4, cost: 50 },
        { id: 5, name: "Volini Spray", averageRating: 4, userVoted: 7, cost: 60 },
        { id: 6, name: "Cofsils",      averageRating: 5, userVoted: 8, cost: 70 },
        { id: 7, name: "Amoxicillin",  averageRating: 1, userVoted: 1, cost: 80 },
    ]

}

app.get('/', (req, res) => {
    res.send("Medicify Project backend Server Created Successfully!")
})


app.get('/medicify', (req, res) => {
  res.json(medicify.medicine)
})

// Id
app.get('/medicify/:id', (req, res) => {
  id = parseInt(req.params.id);
  const content = medicify.medicine.find((c) => c.id == req.params.id)
  if (!content) {
      res.status(404).send("Not found plz type correct id!")
  }
  else {
      res.json(medicify.medicine[id-1])
  }
})

// Id and name
app.get('/medicify/:id/:medicineName', (req, res) => {
  id = parseInt(req.params.id);
  const content = medicify.medicine.find((c) => c.name === req.params.medicineName)
  if (!content) {
      res.status(404).send("Not found plz type correct name and id!")
  }
  else {
      res.json(medicify.medicine[id-1])
  }
})

//Rating
app.get('/medicify/:id/:medicineName/rating', (req, res) => {
  id = parseInt(req.params.id);
  const content = medicify.medicine.find((c) => c.name === req.params.medicineName)
  if (!content) {
      res.status(404).send("Not found plz type correct name and id!")
  }
  else {
      res.json(medicify.medicine[id-1])
  }
})


// POST - Add a rating to a course
app.post("/medicify", (req, res) => {
  // medicify.medicine.push(req.body)
  res.json(medicify.medicine)
})


app.post("/medicify/:medicineName/rating", (req, res) => {
  const content = medicify.medicine.find((c) => c.name === req.params.medicineName);
  if (!content) {
      res.status(404).send("Medicine not found");
  } else {
      const newRating = parseInt(req.body.rating);

      // Update the average rating and user voted count
      content.averageRating = (content.averageRating * content.userVoted + newRating) / (content.userVoted + 1);
      content.userVoted += 1;

      res.json(content);
  }
});



// PUT - Modify information of a course
app.put("/medicify/:medicineName", (req, res) => {
  const index = medicify.medicine.findIndex((c) => c.name === req.params.medicineName);
  if (index === -1) {
      res.status(404).send("Course not found");
  } else {
      medicify.medicine[index] = { ...medicify.medicine[index], ...req.body };
      res.send("Medicine updated");
      // res.json(medicify.medicine)
  }
})



// PATCH - Update partial information of a course
app.patch("/medicify/:medicineName", (req, res) => {
  const index = medicify.medicine.findIndex((c) => c.name === req.params.medicineName);
  if (index === -1) {
      res.status(404).send("Content not found");
  } else {
      const medicineToUpdate = medicify.medicine[index];

      // Update specific fields if they exist in the request body
      if (req.body.cost) medicineToUpdate.cost = req.body.cost;
      if (req.body.averageRating) medicineToUpdate.averageRating = req.body.averageRating;

      res.send("Content partially updated");
  }
});



// DELETE - Remove a medicine by name
app.delete("/medicify/:medicineName", (req, res) => {
  const index = medicify.medicine.findIndex((c) => c.name === req.params.medicineName);
  if (index === -1) {
      res.status(404).send("Medicine not found");
  } else {
      medicify.medicine.splice(index, 1);
      res.send("Medicine deleted");
  }
});

const port = process.env.PORT || 2300;
app.listen(port, ()=>{
    console.log(`App listening on port http://localhost:${port}`)
})