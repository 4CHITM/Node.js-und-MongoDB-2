const express = require('express');
const asyncHandler = require('express-async-handler');
const { getDogs } = require('../model/dogs.js');

const router = express.Router();

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.get(
  '/dogs',
  asyncHandler(async (req, res) => {
    const list = await getDogs();
    res.status(200).send(list);
  }),
);

module.exports = router;
