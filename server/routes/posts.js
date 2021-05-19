import express from 'express';
// const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send('this works');
});

export default router;