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

app.get("/employees/:index", (req, res) => {
    const { index } = req.params;
    if (index < 0 || index >= employees.length) {
        res.status(404).send("That employee does not exist.");
    } else {
        res.json(employees[index]);
    }
});

app.get("/employees/:index", (req, res) => {
    const { index } = req.params;
    if (index < 0 || index >= employees.random) {
    };
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});


