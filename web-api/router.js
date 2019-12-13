const express = require("express");
const roomRoutes = require("./korisnik/routes");
const delovi = require("./delovi/routes");
const deviceRoutes = require("./produkti/routes");
const schedulerRoutes = require("./createUser/routes");
const bike = require("./velosipedi/routes");

const router = express.Router();
router.use(bike);
router.use(roomRoutes);
router.use(deviceRoutes);
router.use(schedulerRoutes);
router.use(delovi);

module.exports = router;