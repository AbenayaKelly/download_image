const express = require ("express");
const path = require('path');
const router = express.Router();

router.get("/", (resq, res) =>{
    res.sendFile(path.join(__dirname,"../index.html"));
});

module.exports = router;