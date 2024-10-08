// TODO: this file :)
const express = require("express");
const app = express();

const employees = require("./employees");

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello employees!");
});

app.get("/employees", (req, res)=> {
    res.json(employees);
});

// tried to figure the random part by myself but couldn't figure it out,
// did noticed something to do with Math.random but couldn't figure out how to use it in this function
app.get("/employees/random", (req, res) => {
    const i = Math.floor(Math.random() * employees.length);
    res.json(employees[i]);
});

app.get("/employees/:index", (req, res) => {
    const { index } = req.params;
    if (index < 0 || index >= employees.length) {
        res.status(404).send("That employee does not exist.");
    } else {
        res.json(employees[index]);
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});


