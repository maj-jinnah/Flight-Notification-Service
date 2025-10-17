const express = require("express");
const router = express.Router();

const { InfoController, EmailController } = require("../../controllers");

// localhost:4000/api/v1
router.get('/health', InfoController.health);
router.post('/tickets', EmailController.create);


module.exports = router; 