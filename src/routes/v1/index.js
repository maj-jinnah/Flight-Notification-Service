const express = require("express");
const router = express.Router();



// localhost:4000/api/v1
router.get('/health', InfoController.health);


module.exports = router;