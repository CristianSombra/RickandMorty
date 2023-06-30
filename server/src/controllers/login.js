const data = require("../utils/users");

const express = require("express")


const login = (req, res) => {
    const {email, password} = req.query;
    const found = data.find(user => user.email === email && user.password === password);
    
    // opcion A
    const access = found ? true : false  
    res.status(200).json({access});
    
    // opcion B
    // found
    //     ? res.status(200).json({access: true})
    //     : res.status(400).json({access: false})
};

module.exports = login;